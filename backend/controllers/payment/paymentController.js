const stripeModel = require("../../models/stripeModel");
const { responseReturn } = require("../../utilities/response");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const sellerModel = require("../../models/sellerModel");
const withdrawModel = require("../../models/withdrawRequest");
const sellerWallet = require("../../models/sellerWallet");

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

  sumAmount = (data) => {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
      sum += data[i].amount;
    }
    return sum;
  };

  get_seller_payment_details = async (req, res) => {
    const { sellerId } = req.params;

    try {
      const payments = await sellerWallet.find({ sellerId });
      const pendingWithdraw = await withdrawModel.find({
        $and: [
          {
            sellerId: {
              $eq: sellerId,
            },
          },
          {
            status: {
              $eq: "pending",
            },
          },
        ],
      });

      const successWithdraw = await withdrawModel.find({
        $and: [
          {
            sellerId: {
              $eq: sellerId,
            },
          },
          {
            status: {
              $eq: "success",
            },
          },
        ],
      });

      const pendingAmount = this.sumAmount(pendingWithdraw);
      const withdrawAmount = this.sumAmount(successWithdraw);
      const totalAmount = this.sumAmount(payments);
      let availableAmount = 0;
      if (totalAmount > 0) {
        availableAmount = totalAmount - (pendingAmount + withdrawAmount);
      }
      responseReturn(res, 200, {
        pendingWithdraw,
        successWithdraw,
        totalAmount,
        withdrawAmount,
        pendingAmount,
        availableAmount,
      });
    } catch (error) {
      console.log(error);
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };

  withdraw_request = async (req, res) => {
    const { amount, sellerId } = req.body;

    try {
      const withdraw = await withdrawModel.create({
        sellerId,
        amount: parseInt(amount),
      });

      responseReturn(res, 200, {
        withdraw,
        message: "Withdraw request sent successfully",
      });
    } catch (error) {
      console.log(error);
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };

  get_payment_request = async (req, res) => {
    try {
      const withdrawRequest = await withdrawModel.find({
        status: "pending",
      });
      responseReturn(res, 200, { withdrawRequest });
    } catch (error) {
      console.log(error);
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };

  payment_request_confirm = async (req, res) => {
    const { paymentId } = req.body;
    console.log(paymentId);

    try {
    } catch (error) {}
  };
}

module.exports = new paymentController();
