const { dbConfig } = require("../../../schemas/");

const getOneCategoryService = (input) =>
  new Promise(async (resolve, reject) => {
    console.log(`Service function GetOne category`);
    try {
      const { id } = input;

      //validate

      //GetOne category from DB
      const data = await dbConfig.pool.query(
        `SELECT * FROM categories WHERE id='${id}'`
      );
      console.log({data})
      // console.log({rows})
      // if (rows.length === 0) {
      //   return reject("Category not found");
      // }

      return resolve(data);
    } catch (err) {
      console.log({ err });
      return reject(err);
    }
  });

module.exports = {
  getOneCategoryService,
};
