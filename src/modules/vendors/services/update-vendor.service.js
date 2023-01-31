const { dbConfig } = require("../../../schemas");

const updateVendorService = (req) =>
    new Promise(async (resolve, reject) => {
        console.log(`Service function update category`);
        try {
            //validate

            //Update category into DB
            const { id } = req.params;
            await dbConfig.pool.query(
                `UPDATE vendors SET name = ?, address = ?, phone = ? WHERE id = ?`,
                [req.body.name, req.body.address, req.body.phone, id],
                function (err, results) {
                    if (err) {
                        console.log("err", err);
                    }
                    console.log("result:", results);
                }
            );

            return resolve("Update vendor success");
        } catch (err) {
            console.log({ err });
            return reject(err);
        }
    });

module.exports = {
    updateVendorService,
};
