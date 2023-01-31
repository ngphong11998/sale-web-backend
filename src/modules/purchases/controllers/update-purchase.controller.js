const {
    updatePurchaseService,
} = require("../services/update-purchase.service");

module.exports = async (req, res) => {
    console.log(`API Update Product`);
    try {
        const resultUpdatePurchase = await updatePurchaseService(req);

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultUpdatePurchase,
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
