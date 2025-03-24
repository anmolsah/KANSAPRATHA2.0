const sellerModel = require("../../models/sellerModel");
const { responseReturn } = require("../../utilities/response");

class sellerController {
  request_seller_get = async (req, res) => {
    const { page, searchValue, perPage } = req.query;
    const skipPage = parseInt(perPage) * (parseInt(page) - 1);

    try {
      if (searchValue) {
      } else {
        const sellers = await sellerModel
          .find({ status: "pending" })
          .skip(skipPage)
          .limit(perPage)
          .sort({ createdAt: -1 });
        const totalSeller = await sellerModel
          .find({
            status: "pending",
          })
          .countDocuments();
        responseReturn(res, 200, {
          sellers,
          totalSeller,
        });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "Internal Server Error" });
    }
  };

  get_seller = async (req, res) => {
    const { sellerId } = req.params;

    try {
      const seller = await sellerModel.findById(sellerId);
      responseReturn(res, 200, { seller });
    } catch (error) {
      responseReturn(res, 500, { error: "Internal Server Error" });
    }
  };
}

module.exports = new sellerController();
