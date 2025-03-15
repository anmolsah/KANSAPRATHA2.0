const categoryController = require("../../controllers/dashboard/categoryController");

const { authMiddleware } = require("../../middleware/authMiddleware");

const router = require("express").Router();

router.post("/category-add",authMiddleware, categoryController.add_category);

module.exports = router;
