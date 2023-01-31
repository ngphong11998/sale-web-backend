const { dbConfig } = require("../../../schemas");

const createUserService = (req) =>
    new Promise(async (resolve, reject) => {
        try {
            //Insert User into DB
            await dbConfig.pool.query(
                "INSERT INTO users(type, name, password, gender, email, phone, address) VALUES ?",
                [
                    [
                        [
                            req.body.type,
                            req.body.name,
                            req.body.password,
                            req.body.gender,
                            req.body.email,
                            req.body.phone,
                            req.body.address,
                        ],
                    ],
                ],
                function (err, result) {
                    if (err) {
                        console.log("err", err);
                    }
                    console.log("result", result);
                }
            );
            return resolve("Create user successed");
        } catch (err) {
            console.log({ err });
            return reject(err);
        }
    });

module.exports = {
    createUserService,
};
