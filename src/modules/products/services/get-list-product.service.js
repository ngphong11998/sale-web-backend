const { dbConfig } = require("../../../schemas");

const getListProductService = () =>
    new Promise(async (resolve, reject) => {
        console.log(`Service function GetList Product`);
        try {
            // const { name } = input;

            //validate

            //Get list category from DB
            await dbConfig.pool.query(
                `SELECT * FROM products`,
                function (err, result) {
                    if (err) throw err;
                    console.log(result);
                }
            );

            return resolve("Get successed!");
        } catch (err) {
            console.log({ err });
            return reject(err);
        }
    });

module.exports = {
    getListProductService,
};
