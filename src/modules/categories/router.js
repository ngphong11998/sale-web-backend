const express = require("express");
const router = express.Router();

const {
  createCategoryController,
  updateCategoryController,
  getOneCategoryController,
  getListCategoryController,
} = require("./controllers");

router.post("/create", createCategoryController);
router.put("/update/:id", updateCategoryController);
router.get("/detail/:id", getOneCategoryController);
router.get("/list", getListCategoryController);

module.exports = {
  router,
};
