const { dbConfig } = require("../../../schemas");

const getListVendorService = () =>
    new Promise(async (resolve, reject) => {
        console.log(`Service function GetList vendor`);
        try {
            //validate

            //Get list category from DB
            await dbConfig.pool.query(
                `SELECT * FROM vendors`,
                function (err, result) {
                    if (err) throw err;
                    console.log(result);
                }
            );

            return resolve("Get success");
        } catch (err) {
            console.log({ err });
            return reject(err);
        }
    });

module.exports = {
    getListVendorService,
};
