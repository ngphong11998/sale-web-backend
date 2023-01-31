const {
    getOnePurchaseService,
} = require("../services/get-one-purchase.service");

module.exports = async (req, res) => {
    console.log(`API GetOne Purchase`);
    try {
        const { id } = req.params;

        const resultGetOnePurchase = await getOnePurchaseService({ id });

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultGetOnePurchase,
        });
    } catch (err) {
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json("Error in GetOne Purchase: " + message);
    }
};
