async function createTableCategories(pool) {
    pool.query(`CREATE TABLE IF NOT EXISTS categories (
        id INT(11) NOT NULL AUTO_INCREMENT  PRIMARY KEY,
        name VARCHAR(50)
    )`);
    return;
}

module.exports = {
    createTableCategories
};