const { updateVendorService } = require("../services/update-vendor.service");

module.exports = async (req, res) => {
    console.log(`API Update vendor`);
    try {
        const resultUpdateVendor = await updateVendorService(req);

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultUpdateVendor,
        });
    } catch (err) {
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json("Error in Update Vendor: " + message);
    }
};
