const cartModel = require("../../models/cartModel");
const { responseReturn } = require("../../utilities/response");

class cartController {
  add_to_cart = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
      const product = await cartModel.findOne({
        $and: [
          {
            productId: {
              $eq: productId,
            },
          },
          {
            userId: {
              $eq: userId,
            },
          },
        ],
      });

      if (product) {
        responseReturn(res, 404, { error: "Product already exists in cart" });
      } else {
        const product = await cartModel.create({
          userId,
          productId,
          quantity,
        });
        responseReturn(res, 201, {
          message: "Product added to cart successfully",
          product,
        });
      }
    } catch (error) {
        console.log(error);
        responseReturn(res, 500, { error: "Internal server error" });
    }
  };
}

module.exports = new cartController();
