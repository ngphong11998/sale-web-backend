const { dbConfig } = require("../../../schemas");

const createVendorService = (req) =>
    new Promise(async (resolve, reject) => {
        console.log(`Service function create Vendor`);
        try {
            //validate

            //Insert category into DB
            await dbConfig.pool.query(
                "INSERT INTO vendors(name, address, phone) VALUES ?",
                [[[req.body.name, req.body.address, req.body.phone]]],
                function (err, result) {
                    if (err) {
                        console.log("err", err);
                    }
                    console.log("result", result);
                }
            );

            return resolve("Create vendor success");
        } catch (err) {
            console.log({ err });
            return reject(err);
        }
    });

module.exports = {
    createVendorService,
};
