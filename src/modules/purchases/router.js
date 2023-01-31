const express = require("express");
const router = express.Router();

const {
    createPurchaseController,
    getOnePurchaseController,
    updatePurchaseController,
    getListPurchaseController,
} = require("./controllers");

router.post("/create", createPurchaseController);
router.put("/update/:id", updatePurchaseController);
router.get("/detail/:id", getOnePurchaseController);
router.get("/list", getListPurchaseController);

module.exports = router;
