const { dbConfig } = require("../../../schemas");

const updatePurchaseService = (req) =>
    new Promise(async (resolve, reject) => {
        console.log(`Service function update purchase`);
        try {
            //validate

            //Update category into DB
            const { id } = req.params;
            var CURRENT_TIMESTAMP = {
                toSqlString: function () {
                    return "CURRENT_TIMESTAMP()";
                },
            };
            await dbConfig.pool.query(
                `UPDATE purchases SET vendorID = ?, productID = ?, quantity = ?, datePurchase = ?, modified = ? WHERE id = ?`,
                [
                    req.body.vendorID,
                    req.body.productID,
                    req.body.quantity,
                    req.body.datePurchase,
                    CURRENT_TIMESTAMP,
                    id,
                ],
                function (err, results) {
                    if (err) {
                        console.log("err", err);
                    }
                    console.log("result:", results);
                }
            );

            return resolve("Update Purchase successed");
        } catch (err) {
            console.log({ err });
            return reject(err);
        }
    });

module.exports = {
    updatePurchaseService,
};
