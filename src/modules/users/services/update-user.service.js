const { dbConfig } = require("../../../schemas");

const updateUserService = (req) =>
    new Promise(async (resolve, reject) => {
        try {
            //validate

            //Update user into DB
            const { id } = req.params;

            await dbConfig.pool.query(
                `UPDATE users SET type = ?, name = ?, password = ?, gender = ?, email = ?, phone = ?, address = ? WHERE id = ?`,
                [
                    req.body.type,
                    req.body.name,
                    req.body.password,
                    req.body.gender,
                    req.body.email,
                    req.body.phone,
                    req.body.address,
                    id,
                ],
                function (err, results) {
                    if (err) {
                        console.log("err", err);
                    }
                    console.log("result:", results);
                }
            );

            return resolve("Update User successed");
        } catch (err) {
            console.log({ err });
            return reject(err);
        }
    });

module.exports = {
    updateUserService,
};
