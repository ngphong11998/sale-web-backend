const { dbConfig } = require('../../../schemas');

const createOrderService = (req, res) =>
    new Promise(async (resolve, reject) => {
        try {
            //Insert User into DB
            await dbConfig.pool.query(
                'INSERT INTO orders(userID) VALUES ?',
                [[[req.body.userID]]],
                function (err, results) {
                    if (err) {
                        res.send({
                            success: false,
                            message: 'database error',
                            error: err,
                        });
                    }
                    let orderId = results.insertId;

                    dbConfig.pool.query(
                        ` UPDATE orders s SET s.shipName = (SELECT name from users u WHERE u.id=s.userID), s.shipAddress = (SELECT address from users u 
                            WHERE u.id=s.userID) WHERE s.id = ${orderId}`,
                        function (err) {
                            if (err) {
                                res.send({
                                    success: false,
                                    message: 'database error',
                                    error: err,
                                });
                            }

                            dbConfig.pool.query(
                                'INSERT INTO orderdetail(orderID, productID, price, quantity) VALUES ?',
                                [[[orderId, req.body.productID, req.body.price, req.body.quantity]]],
                                function (err) {
                                    if (err) {
                                        res.send({
                                            success: false,
                                            message: 'database error',
                                            error: err,
                                        });
                                    }

                                    dbConfig.pool.query(
                                        `UPDATE orderdetail SET amount = price * quantity`,
                                        function (err) {
                                            if (err) {
                                                res.send({
                                                    success: false,
                                                    message: 'database error',
                                                    error: err,
                                                });
                                            }

                                            dbConfig.pool.query(
                                                `UPDATE orders s SET s.subTotal = (SELECT sum(amount) from orderdetail o WHERE o.orderID = ${orderId}) WHERE s.id = ${orderId}`,
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
                        },
                    );
                },
            );
            // return resolve('OK');
        } catch (err) {
            console.log({ err });
            return reject(err);
        }
    });

module.exports = {
    createOrderService,
};
