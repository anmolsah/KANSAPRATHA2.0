const customerModel = require("../../models/customerModel");
const { responseReturn } = require("../../utilities/response");
const bcrypt = require("bcrypt");
sellerCustomerModel = require("../../models/chat/sellerCustomerModel");


class customerAuthController {
    customer_register = async (req, res) => {
        const { name, email, password } = req.body;
        try {
           const customer = await customerModel.findOne({ email });
            if (customer) {
                responseReturn(res, 400, { error: "Customer already exists" });
            }else{
                const createCustomer = await customerModel.create({
                    name:name.trim(),
                    email:email.trim(),
                    password:await bcrypt.hash(password, 10),
                    method:'menualy'
                })
                await sellerCustomerModel.create({
                    myId:createCustomer.id
                })
            }
           

        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
            
        }
    }
}


module.exports = new customerAuthController();
