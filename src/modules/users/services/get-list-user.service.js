const { dbConfig } = require('../../../schemas');

const getListUserService = () =>
    new Promise(async (resolve, reject) => {
        console.log(`Service function GetList User`);
        try {
            //validate

            //Get list category from DB
            await dbConfig.pool.query(`SELECT * FROM users`, function (err, result) {
                if (err) throw err;
                console.log(result);
            });

            return resolve('Get successed!');
        } catch (err) {
            console.log({ err });
            return reject(err);
        }
    });

module.exports = {
    getListUserService,
};
