// class authControllers {
//   admin_login = async (req, res) => {
//     console.log(req.body);
//   };
// }

// module.exports = new authControllers();
const adminModel = require("../models/adminModel");
class AuthControllers {
  async adminLogin(req, res) {
    const { email, password } = req.body;

    try {
      const admin = await adminModel.findOne({ email }).select("+password");
      //console.log(admin);
      if(admin){

      }else{
        
      }
    } catch (error) {}
  }
}

module.exports = new AuthControllers();
