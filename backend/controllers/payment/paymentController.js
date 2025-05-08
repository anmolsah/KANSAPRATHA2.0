const stripeModel = require("../../models/stripeModel");
const { responseReturn } = require("../../utilities/response");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

class paymentController {
  create_stripe_connect_account = async (req, res) => {
    const { id } = req;
    const uid = uuidv4();
    try {
      const stripeInfo = await stripeModel.findOne({ sellerId: id });
      if (stripeInfo) {
        await stripeModel.deleteOne({ sellerId: id });
        const account = await stripe.accounts.create({
          type: "express",
        });
        const accountLink = await stripe.accountLinks.create({
          account: account.id,
          refresh_url: process.env.STRIPE_REDIRECT_URL,
          return_url: `http://localhost:9000/success?activeCode=${uid}`,
          type: "account_onboarding",
        });
        await stripeModel.create({
          sellerId: id,
          stripeId: account.id,
          code: uid,
        });
        responseReturn(res, 200, { url: accountLink.url });
      } else {
        const account = await stripe.accounts.create({
          type: "express",
        });
        const accountLink = await stripe.accountLinks.create({
          account: account.id,
          refresh_url: process.env.STRIPE_REDIRECT_URL,
          return_url: `http://localhost:9000/success?activeCode=${uid}`,
          type: "account_onboarding",
        });
        await stripeModel.create({
          sellerId: id,
          stripeId: account.id,
          code: uid,
        });
        responseReturn(res, 200, { url: accountLink.url });
      }
    } catch (error) {
      console.log(error);
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };
}

module.exports = new paymentController();
