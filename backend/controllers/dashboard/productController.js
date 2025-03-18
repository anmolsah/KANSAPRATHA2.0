const formidable = require("formidable");
const { responseReturn } = require("../../utilities/response");
const cloudinary = require("cloudinary").v2;

class productController {
  add_product = async (req, res) => {
    const form = formidable({ multiples: true });
    form.parse(req, async (err, field, files) => {
      console.log(files);
      console.log(field);
    });
  };
}

module.exports = new productController();
