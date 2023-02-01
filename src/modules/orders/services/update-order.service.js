const { dbConfig } = require('../../../schemas');

const updateOrderService = (req, res) =>
    new Promise(async (resolve, reject) => {
        try {
            const { id } = req.params;

            await dbConfig.pool.query(
                'INSERT INTO orderdetail(orderID, productID, price, quantity) VALUES ?',
                [[[id, req.body.productID, req.body.price, req.body.quantity]]],
                function (err, results) {
                    if (err) {
                        res.send({
                            success: false,
                            message: 'database error',
                            error: err,
                        });
                    }
                    dbConfig.pool.query(
                        `UPDATE orderdetail  SET amount = (price * quantity) WHERE orderID = ${id}`,
                        function (err) {
                            if (err) {
                                res.send({
                                    success: false,
                                    message: 'database error',
                                    error: err,
                                });
                            }

                            dbConfig.pool.query(
                                `UPDATE orders s SET s.subTotal = (SELECT sum(amount) from orderdetail o WHERE o.orderID = ${id}) WHERE s.id = ${id}`,
                                function (err) {
                                    if (err) {
                                        res.send({
                                            success: false,
                                            message: 'database error',
                                            error: err,
                                        });
                                    }
                                    return resolve('query was successful');
                                },
                            );
                        },
                    );
                },
            );
        } catch (err) {
            console.log({ err });
            return reject(err);
        }
    });

module.exports = {
    updateOrderService,
};
