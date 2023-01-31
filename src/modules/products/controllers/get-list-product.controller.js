const {
    getListProductService,
} = require("../services/get-list-product.service");

module.exports = async (req, res) => {
    console.log(`API Getlist Product`);
    try {
        const resultGetListProduct = await getListProductService();

        return res.json({
            code: 200,
            message: "Successed",
            data: resultGetListProduct,
        });
    } catch (err) {
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json("Error in GetList Product: " + message);
    }
};
