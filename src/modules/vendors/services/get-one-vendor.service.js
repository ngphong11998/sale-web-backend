const { dbConfig } = require("../../../schemas");

const getOneVendorService = (req) =>
    new Promise(async (resolve, reject) => {
        console.log(`Service function GetOne vendor`);
        try {
            const { id } = req;

            //validate

            //GetOne category from DB
            await dbConfig.pool.query(
                `SELECT * FROM vendors WHERE id=${id}`,
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
    getOneVendorService,
};
