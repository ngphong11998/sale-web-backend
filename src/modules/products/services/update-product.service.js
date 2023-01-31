const { dbConfig } = require("../../../schemas");

const updateProductService = (req) =>
    new Promise(async (resolve, reject) => {
        console.log(`Service function update product`);
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
                `UPDATE products SET name = ?, size = ?, price = ?, imageLink = ?, quantityAvailable = ?, categoryID = ?, modified = ? WHERE id = ?`,
                [
                    req.body.name,
                    req.body.size,
                    req.body.price,
                    req.body.imageLink,
                    req.body.quantityAvailable,
                    req.body.categoryID,
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

            return resolve("Update Product successed");
        } catch (err) {
            console.log({ err });
            return reject(err);
        }
    });

module.exports = {
    updateProductService,
};
