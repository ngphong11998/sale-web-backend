const { dbConfig } = require("../../../schemas/");

const createCategoryService = (input) =>
  new Promise(async (resolve, reject) => {
    console.log(`Service function create category`);
    try {
      const { name } = input;

      //validate

      //Insert category into DB
      const category = await dbConfig.pool.query(
        `insert into categories(name) values('${name}')`
      );

      return resolve("Create category success");
    } catch (err) {
      console.log({ err });
      return reject(err);
    }
  });

module.exports = {
  createCategoryService,
};
