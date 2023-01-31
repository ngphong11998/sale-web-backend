const { getOneUserService } = require("../services/get-one-user.service");

module.exports = async (req, res) => {
    console.log(`API GetOne User`);
    try {
        const { id } = req.params;

        const resultGetOneUser = await getOneUserService({ id });

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultGetOneUser,
        });
    } catch (err) {
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json("Error in GetOne User: " + message);
    }
};
