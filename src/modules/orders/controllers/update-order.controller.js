const { updateOrderService } = require('../services/update-order.service');

module.exports = async (req, res) => {
    try {
        const resultUpdateOrder = await updateOrderService(req, res);

        return res.status(200).json({
            success: true,
            message: resultUpdateOrder,
        });
    } catch (err) {
        let message;
        if (typeof err === 'object') {
            message = JSON.stringify(err);
        } else {
            message = err;
        }
        return res.status(400).json('Error in controller updated order: ' + message);
    }
};
