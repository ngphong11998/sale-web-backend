const {
  getOneCategoryService,
} = require("../services/get-one-category.service");

module.exports = async (req, res) => {
  console.log(`API GetOne category`);
  try {
    const { id } = req.params;

    const resultGetOneCategory = await getOneCategoryService({ id });

    return res.json({
      code: 200,
      message: "Successed!",
      data: resultGetOneCategory,
    });
  } catch (err) {
    let message;
    if (typeof err === "object") {
      message = JSON.stringify(err);
    } else {
      message = err;
    }
    return res.status(400).json("Error in GetOne category: " + message);
  }
};
