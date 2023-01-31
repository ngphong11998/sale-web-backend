const { getOneVendorService } = require("../services/get-one-vendor.service");

module.exports = async (req, res) => {
    console.log(`API GetOne Vendor`);
    try {
        const { id } = req.params;

        const resultGetOneVendor = await getOneVendorService({ id });

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultGetOneVendor,
        });
    } catch (err) {
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json("Error in GetOne Vendor: " + message);
    }
};
