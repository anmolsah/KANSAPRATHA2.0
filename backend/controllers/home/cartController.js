const cartModel = require("../../models/cartModel");
const { responseReturn } = require("../../utilities/response");
const {
  mongo: { ObjectId },
} = require("mongoose");

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

  get_cart_products = async (req, res) => {
    const { userId } = req.params;

    try {
      const cart_products = await cartModel.aggregate([
        {
          $match: {
            userId: {
              $eq: new ObjectId(userId),
            },
          },
        },

        {
          $lookup:{
            from: "products",
            localField: "productId",
            foreignField: "_id",
            as: "products",
          }
        }
      ]);

      let buy_product_item = 0;
      let calculatePrice = 0;
      let cart_product_count = 0;
      const outOfStock =cart_products.filter((p)=>p.products[0].stock < p.quantity);
      for(let i = 0; i < outOfStock.length; i++){
        cart_product_count = cart_product_count + outOfStock[i].quantity;
      }
      //console.log(cart_products);
    } catch (error) {
      console.log(error);
      responseReturn(res, 500, { error: "Internal server error" });
    }
  };
}

module.exports = new cartController();
