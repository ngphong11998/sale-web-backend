const { createUserService } = require("../services/create-user.service");

module.exports = async (req, res) => {
    console.log(`API create user`);
    try {
        const resultCreateUser = await createUserService(req);

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultCreateUser,
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
            .json("Error in controller create User: " + message);
    }
};
