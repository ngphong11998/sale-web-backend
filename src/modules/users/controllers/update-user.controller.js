const { updateUserService } = require("../services/update-user.service");

module.exports = async (req, res) => {
    console.log(`API Update User`);
    try {
        const resultUpdateUser = await updateUserService(req);

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultUpdateUser,
        });
    } catch (err) {
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json("Error in Update User: " + message);
    }
};
