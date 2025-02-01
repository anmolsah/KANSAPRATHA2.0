// class authControllers {
//   admin_login = async (req, res) => {
//     console.log(req.body);
//   };
// }

// module.exports = new authControllers();
const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utilities/response");
const bcrypt = require("bcrypt");
class AuthControllers {
  async adminLogin(req, res) {
    const { email, password } = req.body;

    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      //console.log(admin);
      if (admin) {
        const match = await bcrypt.compare(password, admin.password);
        if (match) {
          const token = await createToken({
            id: admin.id,
            role:admin.role
          })
        } else {
          responseReturn(res, 401, "Password is incorrect");
        }
      } else {
        responseReturn(res, 404, "Admin not found");
      }
    } catch (error) {
      responseReturn(res, 500, error);
    }
  }
}

module.exports = new AuthControllers();
