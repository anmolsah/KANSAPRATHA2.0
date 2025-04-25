

class customerAuthController {
    customer_register = async (req, res) => {
        try {
            console.log(req.body)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal server error" });
            
        }
    }
}


module.exports = new customerAuthController();
