const {
  updateCategoryService,
} = require("../services/update-category.service");

module.exports = async (req, res) => {
  console.log(`API Update category`);
  try {
    const { id } = req.params;
    const { name } = req.body;

    const resultUpdateCategory = await updateCategoryService({
      id,
      name,
    });

    return res.json({
      code: 200,
      message: "Successed!",
      data: resultUpdateCategory,
    });
  } catch (err) {
    let message;
    if (typeof err === "object") {
      message = JSON.stringify(err);
    } else {
      message = err;
    }
    return res.status(400).json("Error in Update category: " + message);
  }
};
