const stripeModel = require("../../models/stripeModel");
const { responseReturn } = require("../../utilities/response");
const {v4: uuidv4} = require('uuid');
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

class paymentController {
  create_stripe_connect_account = async (req, res) => {
    console.log("testing ...");
    console.log(req.id);
    try {
    } catch (error) {}
  };
}

module.exports = new paymentController();
