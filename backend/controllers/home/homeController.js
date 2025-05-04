const categoryModel = require("../../models/categoryModel");
const { responseReturn } = require("../../utilities/response");
const productModel = require("../../models/productModel");
const queryProducts = require("../../utilities/queryProducts");
const reviewModel = require("../../models/reviewModel");
const moment = require("moment");

class homeController {
  formateProduct = (products) => {
    const productArray = [];
    let i = 0;
    while (i < products.length) {
      let temp = [];
      let j = i;
      while (j < i + 3) {
        if (products[j]) {
          temp.push(products[j]);
        }
        j++;
      }
      productArray.push([...temp]);
      i = j;
    }
    return productArray;
  };

  get_categorys = async (req, res) => {
    try {
      const categorys = await categoryModel.find({});
      responseReturn(res, 200, {
        categorys,
      });
    } catch (error) {
      console.log(error.message);
      responseReturn(res, 500, { error: "Internal Server error" });
    }
  };

  get_products = async (req, res) => {
    try {
      const products = await productModel
        .find({})
        .limit(12)
        .sort({ createdAt: -1 });
      const allProduct1 = await productModel
        .find({})
        .limit(9)
        .sort({ createdAt: -1 });
      const latest_product = this.formateProduct(allProduct1);
      const allProduct2 = await productModel
        .find({})
        .limit(9)
        .sort({ rating: -1 });
      const topRated_product = this.formateProduct(allProduct2);
      const allProduct3 = await productModel
        .find({})
        .limit(9)
        .sort({ discount: -1 });
      const discount_product = this.formateProduct(allProduct3);

      responseReturn(res, 200, {
        products,
        latest_product,
        topRated_product,
        discount_product,
      });
    } catch (error) {
      console.log(error.message);
      responseReturn(res, 500, { error: "Internal Server error" });
    }
  };

  price_range_product = async (req, res) => {
    try {
      const priceRange = {
        low: 0,
        high: 0,
      };
      const products = await productModel
        .find({})
        .limit(9)
        .sort({ createdAt: -1 });
      const latest_product = this.formateProduct(products);
      const getForPrice = await productModel.find({}).sort({
        price: 1,
      });
      if (getForPrice.length > 0) {
        priceRange.high = getForPrice[getForPrice.length - 1].price;
        priceRange.low = getForPrice[0].price;
      }
      responseReturn(res, 200, {
        latest_product,
        priceRange,
      });
    } catch (error) {
      console.log(error.message);
      responseReturn(res, 500, { error: "Internal Server error" });
    }
  };

  query_products = async (req, res) => {
    const perPage = 12;
    req.query.perPage = perPage;
    try {
      const products = await productModel.find({}).sort({ createdAt: -1 });
      const totalProduct = new queryProducts(products, req.query)
        .categoryQuery()
        .ratingQuery()
        .searchQuery()
        .priceQuery()
        .sortByPrice()
        .countProducts();
      const result = new queryProducts(products, req.query)
        .categoryQuery()
        .ratingQuery()
        .priceQuery()
        .searchQuery()
        .sortByPrice()
        .skip()
        .limit()
        .getProducts();

      responseReturn(res, 200, { products: result, totalProduct, perPage });
    } catch (error) {
      console.log(error.message);
      responseReturn(res, 500, { error: "Internal Server error" });
    }
  };

  product_details = async (req, res) => {
    const { slug } = req.params;
    try {
      const product = await productModel.findOne({ slug });
      const relatedProducts = await productModel
        .find({
          $and: [
            {
              _id: {
                $ne: product.id,
              },
            },
            {
              category: {
                $eq: product.category,
              },
            },
          ],
        })
        .limit(12);
      const moreProducts = await productModel
        .find({
          $and: [
            {
              _id: {
                $ne: product.id,
              },
            },
            {
              sellerId: {
                $eq: product.sellerId,
              },
            },
          ],
        })
        .limit(3);
      responseReturn(res, 200, {
        product,
        relatedProducts,
        moreProducts,
      });
    } catch (error) {
      console.log(error.message);
      responseReturn(res, 500, { error: "Internal Server error" });
    }
  };

  submit_review = async (req, res) => {
    const { productId, rating, review, name } = req.body;
    try {
      await reviewModel.create({
        productId,
        rating,
        review,
        name,
        date: moment(Date.now()).format("LL"),
      });

      let rat = 0;
      const reviews = await reviewModel.find({ productId });
      for (let i = 0; i < reviews.length; i++) {
        rat += reviews[i].rating;
      }
      let productRating = 0;
      if (reviews.length !== 0) {
        productRating = (rat / reviews.length).toFixed(1);
      }
      await productModel.findByIdAndUpdate(productId, {
        rating: productRating,
      });
      responseReturn(res, 200, {
        message: "Review submitted successfully",
      });
    } catch (error) {
      console.log(error.message);
      responseReturn(res, 500, { error: "Internal Server error" });
    }
  };

  get_reviews = async (req, res) => {
    const { productId } = req.params;
    const { pageNumber } = req.query;
    try {
    } catch (error) {}
  };
}

module.exports = new homeController();
