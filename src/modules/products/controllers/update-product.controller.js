const { updateProductService } = require("../services/update-product.service");

module.exports = async (req, res) => {
    console.log(`API Update Product`);
    try {
        const resultUpdateProduct = await updateProductService(req);

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultUpdateProduct,
        });
    } catch (err) {
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json("Error in Update category: " + message);
    }
};
