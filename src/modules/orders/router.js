const express = require('express');
const router = express.Router();

const {
    createOrderController,
    // getOneOrderController,
    updateOrderController,
    // getListOrderController,
} = require('./controllers');

router.post('/create', createOrderController);
router.put('/update/:id', updateOrderController);
// router.get("/detail/:id", getOneOrderController);
// router.get("/list", getListOrderController);

module.exports = router;
