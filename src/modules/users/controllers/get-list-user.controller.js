const { getListUserService } = require("../services/get-list-user.service");

module.exports = async (req, res) => {
    console.log(`API Getlist Product`);
    try {
        const resultGetListUser = await getListUserService();

        return res.json({
            code: 200,
            message: "Successed",
            data: resultGetListUser,
        });
    } catch (err) {
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json("Error in GetList User: " + message);
    }
};
