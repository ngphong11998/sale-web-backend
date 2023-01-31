const { getOneProductService } = require("../services/get-one-product.service");

module.exports = async (req, res) => {
    console.log(`API GetOne Product`);
    try {
        const { id } = req.params;

        const resultGetOneProduct = await getOneProductService({ id });

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultGetOneProduct,
        });
    } catch (err) {
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json("Error in GetOne Product: " + message);
    }
};
