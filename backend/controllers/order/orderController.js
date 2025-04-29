const moment = require("moment");
const customerOrder = require("../../models/customerOrder");
const authorOrder = require("../../models/authOrder");

class orderController {
  place_order = async (req, res) => {
    const {
      price,
      products,
      shipping_fee,
      shippingInfo,
      userId,
    } = req.body;
    let authorOrderData = [];
    let cartId = [];
    const tempDate = moment(Date.now()).format("LLL");
    try {
    } catch (error) {}
  };
}

module.exports = new orderController();
