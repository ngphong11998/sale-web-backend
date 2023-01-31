const {
    getListPurchaseService,
} = require("../services/get-list-purchase.service");

module.exports = async (req, res) => {
    try {
        const resultGetListPurchase = await getListPurchaseService();

        return res.json({
            code: 200,
            message: "Successed",
            data: resultGetListPurchase,
        });
    } catch (err) {
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json("Error in GetList Purchase: " + message);
    }
};
