const {
    getListCategoryService,
} = require("../services/get-list-category.service");

module.exports = async (req, res) => {
    console.log(`API GetList category`);
    try {
        const { body } = req;

        const resultGetListCategory = await getListCategoryService(body);

        return res.json({
            code: 200,
            message: "Successed!",
            data: resultGetListCategory,
        });
    } catch (err) {
        let message;
        if (typeof err === "object") {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json("Error in GetList category: " + message);
    }
};
