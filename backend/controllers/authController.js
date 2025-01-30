// class authControllers {
//   admin_login = async (req, res) => {
//     console.log(req.body);
//   };
// }

// module.exports = new authControllers();


class AuthControllers {
    async adminLogin(req, res) {  
      console.log(req.body);
      res.status(200).json({ message: "Admin login successful" });
    }
  }
  
  module.exports = new AuthControllers();
  