const adminModel = require("../models/adminModel");
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

  // admin_login = async (req, res) => {
  //   const { email, password } = req.body;

  //   try {
  //     const admin = await adminModel.findOne({ email }).select("+password");
  //     //console.log(admin);
  //     if (admin) {
  //       const match = await bcrypt.compare(password, admin.password);
  //       if (match) {
  //         const token = await createToken({
  //           id: admin.id,
  //           role: admin.role,
  //         });
  //         res.cookie("accessToken", token, {
  //           expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
  //         });
  //         responseReturn(res, 200, { token, message: "login successfull" });
  //       } else {
  //         responseReturn(res, 404, { error: "password is incorrect" });
  //       }
  //     } else {
  //       responseReturn(res, 404, { error: "email not found" });
  //     }
  //   } catch (error) {
  //     responseReturn(res, 500, { error: error.message });
  //   }
  // };
}

module.exports = new AuthControllers();
