const { getListVendorService } = require("../services/get-list-vendor.service");

module.exports = async (req, res) => {
    console.log(`API GetList Vendor`);
    try {
        // const { body } = req;

        const resultGetListVendor = await getListVendorService();

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultGetListVendor,
        });
    } catch (err) {
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json("Error in GetList Vendor: " + message);
    }
};
