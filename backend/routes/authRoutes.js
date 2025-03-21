const authController = require("../controllers/authController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = require("express").Router();

router.post("/admin-login", authController.admin_login);
router.get("/get-user", authMiddleware, authController.getUser);
router.post("/seller-register", authController.seller_register);
router.post("/seller-login", authController.seller_login);
module.exports = router;
