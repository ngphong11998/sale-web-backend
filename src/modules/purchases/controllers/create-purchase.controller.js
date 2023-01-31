const {
    createPurchaseService,
} = require("../services/create-purchase.service");

module.exports = async (req, res) => {
    console.log(`API create purchase`);
    try {
        const resultCreatePurchase = await createPurchaseService(req);

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultCreatePurchase,
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
            .json("Error in controller create Purchase: " + message);
    }
};
