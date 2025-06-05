const stripeModel = require("../../models/stripeModel");
const { responseReturn } = require("../../utilities/response");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const sellerModel = require("../../models/sellerModel");
const withdrawModel = require("../../models/withdrawRequest");
const sellerWallet = require("../../models/stripeModel");


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

  active_stripe_connect_account = async (req, res) => {
    const { activeCode } = req.params;
    const { id } = req;

    try {
      const userStripeInfo = await stripeModel.findOne({ code: activeCode });
      if (userStripeInfo) {
        await sellerModel.findByIdAndUpdate(id, {
          payment: "active",
        });
        responseReturn(res, 200, { message: "Payment Active" });
      } else {
        responseReturn(res, 200, { message: "Payment Active Failed" });
      }
    } catch (error) {
      console.log(error);
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };

  get_seller_payment_details = async (req, res) => {
    const { sellerId } = req.params;

    try {
      const payments = await sellerWallet.find({ sellerId });
    } catch (error) {}
  };
}

module.exports = new paymentController();
