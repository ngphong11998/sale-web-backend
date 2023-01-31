const { dbConfig } = require("../../../schemas/");

const createProductService = (req) =>
    new Promise(async (resolve, reject) => {
        console.log(`Service function create product`);
        try {
            //Insert Prodcut into DB
            await dbConfig.pool.query(
                "INSERT INTO products(name, size, price, imageLink, quantityAvailable, categoryID) VALUES ?",
                [
                    [
                        [
                            req.body.name,
                            req.body.size,
                            req.body.price,
                            req.body.imageLink,
                            req.body.quantityAvailable,
                            req.body.categoryID,
                        ],
                    ],
                ], //Note: values is an array of arrays wrapped in an array [ [ [...], [...], [...] ] ]
                function (err, result) {
                    if (err) {
                        console.log("err", err);
                    }
                    console.log("result", result);
                }
            );
            return resolve("Create product successed");
        } catch (err) {
            console.log({ err });
            return reject(err);
        }
    });

module.exports = {
    createProductService,
};
