const categoryModel = require("../../models/categoryModel");
const { responseReturn } = require("../../utilities/response");

class homeController {
  get_categorys = async (req, res) => {
    try {
      const categorys = await categoryModel.find({});
      responseReturn(res, 200, {
        categorys,
      });
    } catch (error) {
      console.log(error.message);
      responseReturn(res, 500, { error: "Internal Server error" });
    }
  };
}

module.exports = new homeController();
