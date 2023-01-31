const { createProductService } = require("../services/create-product.service");

module.exports = async (req, res) => {
    console.log(`API create product`);
    try {
        // const name = req.body.name;
        // const size = req.body.size;
        // console.log(name, size);

        const resultCreateProduct = await createProductService(req);

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultCreateProduct,
        });
    } catch (err) {
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res
            .status(400)
            .json("Error in controller create product: " + message);
    }
};
