const { pool } = require('../../schemas/index')

const createCategoryService = (input) => new Promise(async (resolve, reject) => {
    console.log(`Service function create category`)
    try {
        const { name } = input

        //validate

        //Insert category into DB
        const category = await pool.query(`INSERT INTO categories (name) VALUES ${name}`)
        console.log({category})


        return resolve(category)
    } catch (err) {
        return reject(err)
    }
})

module.exports = {
    createCategoryService
}