const { dbConfig } = require("../../../schemas/");

const updateCategoryService = (input) =>
  new Promise(async (resolve, reject) => {
    console.log(`Service function update category`);
    try {
      const { id, name } = input;

      //validate

      //Update category into DB
      await dbConfig.pool.query(
        `UPDATE categories SET name = '${name}' WHERE id=${id}`
      );

      return resolve('Update category success');
    } catch (err) {
      console.log({ err });
      return reject(err);
    }
  });

module.exports = {
  updateCategoryService,
};
