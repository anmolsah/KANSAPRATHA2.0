const customerModel = require("../../models/customerModel");
const { responseReturn } = require("../../utilities/response");
const bcrypt = require("bcrypt");
const sellerCustomerModel = require("../../models/chat/sellerCustomerModel");
const { createToken } = require("../../utilities/tokenCreate");

class customerAuthController {
  customer_register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const customer = await customerModel.findOne({ email });
      if (customer) {
        responseReturn(res, 400, { error: "Customer already exists" });
      } else {
        const createCustomer = await customerModel.create({
          name: name.trim(),
          email: email.trim(),
          password: await bcrypt.hash(password, 10),
          method: "menualy",
        });
        await sellerCustomerModel.create({
          myId: createCustomer.id,
        });
        const token = await createToken({
          id: createCustomer.id,
          name: createCustomer.name,
          email: createCustomer.email,
          method: createCustomer.method,
        });

        res.cookie("customerToken", token, {
          expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        });
        responseReturn(res, 200, {
          message: "Customer registered successfully",
          token,
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  customer_login = async (req, res) => {
    const { email, password } = req.body;
    try {
      const customer = await customerModel
        .findOne({ email })
        .select("+password");
      if (customer) {
        const match = await bcrypt.compare(password, customer.password);
        if (match) {
          const token = await createToken({
            id: customer.id,
            name: customer.name,
            email: customer.email,
            method: customer.method,
          });
          res.cookie("customerToken", token, {
            expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
          });
          responseReturn(res, 201, {
            message: "Customer login successfully",
            token,
          });
        } else {
          responseReturn(res, 404, { error: "Invalid password" });
        }
      } else {
        responseReturn(res, 404, { error: "Customer not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
}

module.exports = new customerAuthController();
