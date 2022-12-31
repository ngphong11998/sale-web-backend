const {
  createCategoryService,
} = require("../services/create-category.service");

module.exports = async (req, res) => {
  console.log(`API create category`);
  try {
    const { body } = req;

    const resultCreateCategory = await createCategoryService(body);

    return res.json({
      code: 200,
      message: "Successed!",
      data: resultCreateCategory,
    });
  } catch (err) {
    console.log({ err });
    let message;
    if (typeof err === "object") {
      message = JSON.stringify(err);
    } else {
      message = err;
    }
    return res.status(400).json("Error in create category: " + message);
  }
};
