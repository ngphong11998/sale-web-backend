const express = require("express");
const router = express.Router();

const {
    createProductController,
    getOneProductController,
    updateProductController,
    getListProductController,
} = require("./controllers");

router.post("/create", createProductController);
router.put("/update/:id", updateProductController);
router.get("/detail/:id", getOneProductController);
router.get("/list", getListProductController);

module.exports = router;
