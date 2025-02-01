// class authControllers {
//   admin_login = async (req, res) => {
//     console.log(req.body);
//   };
// }

// module.exports = new authControllers();
const adminModel = require("../models/adminModel");
const { responseReturn } = require("../utilities/response");
class AuthControllers {
  async adminLogin(req, res) {
    const { email, password } = req.body;

    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      //console.log(admin);
      if(admin){

      }else{
        responseReturn(res, 404, "Admin not found");

      }
    } catch (error) {
      responseReturn(res, 500, error);
    }
  }
}

module.exports = new AuthControllers();
