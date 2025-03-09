const adminModel = require("../models/adminModel");
const sellerModel = require("../models/sellerModel");
const sellerCustomerModal = require("../models/chat/sellerCustomerModel");
const { responseReturn } = require("../utilities/response");
const bcrypt = require("bcrypt");
const { createToken } = require("../utilities/tokenCreate");
class AuthControllers {
  admin_login = async (req, res) => {
    const { email, password } = req.body;
    //console.log("Received login request:", email);

    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      //console.log("Admin found in DB:", admin);

      if (!admin) {
        //console.log("Email not found");
        responseReturn(res, 404, { error: "email not found" });
      }

      const match = await bcrypt.compare(password, admin.password);
      //console.log("Password match:", match);

      if (match) {
        const token = await createToken({ id: admin.id, role: admin.role });
        res.cookie("accessToken", token, {
          expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        });
        //console.log("Login successful, token created");
        responseReturn(res, 200, { token, message: "login successful" });
      } else {
        //console.log("Incorrect password");
        responseReturn(res, 404, { error: "password is incorrect" });
      }
    } catch (error) {
      //console.log("Server error:", error);
      responseReturn(res, 500, { error: error.message });
    }
  };

  seller_register = async (req, res) => {
    const { email, name, password } = req.body;

    try {
      const getUser = await sellerModel.findOne({ email });
      if (getUser) {
        responseReturn(res, 404, { error: "Email already exists" });
      } else {
        const seller = await sellerModel.create({
          name,
          email,
          password: await bcrypt.hash(password, 10),
          method: "menually",
          shopInfo: {},
        });
        await sellerCustomerModal.create({
          myId: seller.id,
        });

        const token = await createToken({
          id: seller.id,
          role: seller.role,
        });

        res.cookie("accessToken", token, {
          expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        });
        responseReturn(res, 200, {
          token,
          message: "seller registered successfully",
        });
      }
    } catch (error) {
      responseReturn(res, 500, { error: "internal server error" });
    }
  };

  seller_login = async (req, res) => {
    const { email, password } = req.body;

    try {
      const seller = await sellerModel.findOne({ email }).select("+password");

      if (!seller) {
        responseReturn(res, 404, { error: "email not found" });
      }
      const match = await bcrypt.compare(password, seller.password);

      if (match) {
        const token = await createToken({ id: seller.id, role: seller.role });
        res.cookie("accessToken", token, {
          expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        });
        responseReturn(res, 200, { token, message: "login successful" });
      } else {
        responseReturn(res, 404, { error: "password is incorrect" });
      }
    } catch (error) {
      responseReturn(res, 500, { error: error.message });
    }
  };

  getUser = async (req, res) => {
    const { id, role } = req;

    try {
      if (role === "admin") {
        const user = await adminModel.findById(id);
        responseReturn(res, 200, { userInfo: user });
      } else {
        console.log("seller info");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = new AuthControllers();
