const express = require("express");
const router = express.Router();

const {
    createUserController,
    getOneUserController,
    updateUserController,
    getListUserController,
} = require("./controllers");

router.post("/create", createUserController);
router.put("/update/:id", updateUserController);
router.get("/detail/:id", getOneUserController);
router.get("/list", getListUserController);

module.exports = router;
