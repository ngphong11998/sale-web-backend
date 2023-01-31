async function createTableVendors(pool) {
    pool.query(`CREATE TABLE IF NOT EXISTS vendors (
        id INT AUTO_INCREMENT  PRIMARY KEY,
        name VARCHAR(128),
        address TEXT,
        phone TEXT
    )`);
    return;
}

module.exports = {
    createTableVendors,
};
