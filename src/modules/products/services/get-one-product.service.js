const { dbConfig } = require("../../../schemas");

const getOneProductService = (input) =>
    new Promise(async (resolve, reject) => {
        console.log(`Service function GetOne Product`);
        try {
            const { id } = input;

            //validate

            //GetOne category from DB
            await dbConfig.pool.query(
                `SELECT * FROM products WHERE id=${id}`,
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
    getOneProductService,
};
