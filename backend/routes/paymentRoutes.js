const paymentController = require("../controllers/payment/paymentController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.get(
  "/payment/create-stripe-connect-account",
  authMiddleware,
  paymentController.create_stripe_connect_account
);

module.exports = router;
