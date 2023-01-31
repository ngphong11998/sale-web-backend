const { dbConfig } = require("../../../schemas/");

const getListCategoryService = (input) =>
    new Promise(async (resolve, reject) => {
        console.log(`Service function GetList category`);
        try {
            // const { name } = input;

            //validate

            //Get list category from DB
            await dbConfig.pool.query(
                `SELECT * FROM categories`,
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
    getListCategoryService,
};
