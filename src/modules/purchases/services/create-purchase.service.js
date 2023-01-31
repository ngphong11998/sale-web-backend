const { dbConfig } = require("../../../schemas");

const createPurchaseService = (req) =>
    new Promise(async (resolve, reject) => {
        console.log(`Service function create purchase`);
        try {
            // Validated

            //Insert Purchase into DB
            await dbConfig.pool.query(
                "INSERT INTO purchases(vendorID, productID, quantity, datePurchase) VALUES ?",
                [
                    [
                        [
                            req.body.vendorID,
                            req.body.productID,
                            req.body.quantity,
                            req.body.datePurchase,
                        ],
                    ],
                ],
                function (err, result) {
                    if (err) {
                        console.log("err", err);
                    }
                    console.log("result", result);
                }
            );
            return resolve("Create purchase successed");
        } catch (err) {
            console.log({ err });
            return reject(err);
        }
    });

module.exports = {
    createPurchaseService,
};
