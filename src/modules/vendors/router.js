const express = require("express");
const router = express.Router();

const {
    createVendorController,
    getOneVendorController,
    updateVendorController,
    getListVendorController,
} = require("./controllers");

router.post("/create", createVendorController);
router.put("/update/:id", updateVendorController);
router.get("/detail/:id", getOneVendorController);
router.get("/list", getListVendorController);

module.exports = router;
