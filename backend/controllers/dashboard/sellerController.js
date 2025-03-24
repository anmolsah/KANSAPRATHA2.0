class sellerController {
  request_seller_get = async (req, res) => {
    console.log(req.query);
  };
}

module.exports = new sellerController();
