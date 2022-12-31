const { dbConfig } = require("../../../schemas/");

const getListCategoryService = (input) =>
  new Promise(async (resolve, reject) => {
    console.log(`Service function GetList category`);
    try {
      const { name } = input;

      //validate

      //Get list category from DB

      return resolve(category);
    } catch (err) {
      console.log({ err });
      return reject(err);
    }
  });

module.exports = {
  getListCategoryService,
};
