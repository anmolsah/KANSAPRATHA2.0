const productController = require("../../controllers/dashboard/productController");
const { authMiddleware } = require("../../middleware/authMiddleware");

const router = require("express").Router();

router.post("/product-add", authMiddleware, productController.add_product);
router.get("/products-get", authMiddleware, productController.products_get);
router.get(
  "/product-get/:productId",
  authMiddleware,
  productController.product_get
);

module.exports = router;
