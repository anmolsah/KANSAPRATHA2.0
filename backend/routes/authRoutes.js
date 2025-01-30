const authController = require('../controllers/authController');
const express = require('express');
const router = express.Router();


router.post("/admin-login",authController.adminLogin);


module.exports = router;