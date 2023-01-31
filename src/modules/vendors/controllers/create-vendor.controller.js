const { createVendorService } = require("../services/create-vendor.service");

module.exports = async (req, res) => {
    console.log(`API create Vendor`);
    try {
        const resultCreateVendor = await createVendorService(req);

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultCreateVendor,
        });
    } catch (err) {
        console.log({ err });
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json("Error in create Vendor: " + message);
    }
};
