const { dbConfig } = require("../../../schemas");

const getListPurchaseService = () =>
    new Promise(async (resolve, reject) => {
        console.log(`Service function GetList Purchase`);
        try {
            //validate

            //Get list category from DB
            await dbConfig.pool.query(
                `SELECT * FROM purchases`,
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
    getListPurchaseService,
};
