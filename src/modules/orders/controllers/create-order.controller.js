const { createOrderService } = require('../services/create-order.service');

module.exports = async (req, res) => {
    console.log(`API create user`);
    try {
        const resultCreateOrder = await createOrderService(req, res);

        return res.status(200).json({
            success: true,
            message: resultCreateOrder,
        });
    } catch (err) {
        let message;
        if (typeof err === 'object') {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json('Error in controller create order: ' + message);
    }
};
