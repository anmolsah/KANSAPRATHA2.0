// class authControllers {
//   admin_login = async (req, res) => {
//     console.log(req.body);
//   };
// }

// module.exports = new authControllers();

class AuthControllers {
  async adminLogin(req, res) {
    console.log(req.body);
  }
}

module.exports = new AuthControllers();
