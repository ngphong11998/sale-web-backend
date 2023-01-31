async function createTableProducts(pool) {
    pool.query(`CREATE TABLE IF NOT EXISTS products (
        id INT AUTO_INCREMENT  PRIMARY KEY,
        name VARCHAR(100),
        size VARCHAR(15),
        price DECIMAL(15,2),
        imageLink VARCHAR(255),
        quantityAvailable INT,
        categoryID INT,
        CONSTRAINT products_link_categories FOREIGN KEY (categoryID) REFERENCES categories(id)
    )`);
    return;
}

module.exports = {
    createTableProducts,
};
