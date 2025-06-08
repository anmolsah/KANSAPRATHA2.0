const { responseReturn } = require("../../utilities/response");
const myShopWallet = require("../../models/myShopWallet");
const productModel = require("../../models/productModel");
const customerOrder = require("../../models/customerOrder");
const sellerModel = require("../../models/sellerModel");
const sellerWallet = require("../../models/sellerWallet");
const {
  mongo: { ObjectId },
} = require("mongoose");
const authorOrderModel = require("../../models/authOrder");

class dashboardController {
  get_admin_dashboard_data = async (req, res) => {
    try {
      const totalSale = await myShopWallet.aggregate([
        {
          $group: {
            _id: null,
            totalAmount: { $sum: "$amount" },
          },
        },
      ]);

      const totalProduct = await productModel.find({}).countDocuments();
      const totalOrder = await customerOrder.find({}).countDocuments();
      const totalSeller = await sellerModel.find({}).countDocuments();
      //const messages = await will do it further
      const recentOrders = await customerOrder.find({}).limit(5);
      responseReturn(res, 200, {
        totalProduct,
        totalOrder,
        totalSeller,
        recentOrders,
        totalSale: totalSale.length > 0 ? totalSale[0].totalAmount : 0,
      });
    } catch (error) {
      console.log(error);
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };

  get_seller_dashboard_data = async (req, res) => {
    const { id } = req;
    try {
      const totalSale = await sellerWallet.aggregate([
        {
          $match: {
            sellerId: {
              $eq: id,
            },
          },
        },
        {
          $group: {
            _id: null,
            totalAmount: { $sum: "$amount" },
          },
        },
      ]);

      const totalProduct = await productModel
        .find({ sellerId: new ObjectId(id) })
        .countDocuments();
      const totalOrder = await authorOrderModel
        .find({
          sellerId: new ObjectId(id),
        })
        .countDocuments();
      const totalPendingOrder = await authorOrderModel.find({
        $and: [
          {
            sellerId: {
              $eq: new ObjectId(id),
            },
          },
          {
            delivery_status: {
              $eq: "pending",
            },
          },
        ],
      }).countDocuments();
    } catch (error) {}
  };
}

module.exports = new dashboardController();
