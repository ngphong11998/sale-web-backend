async function createTableOrders(pool) {
    pool.query(
        `CREATE TABLE IF NOT EXISTS orders (
            id INT AUTO_INCREMENT  PRIMARY KEY,
            userID INT,
            CONSTRAINT saleOrders_link_users FOREIGN KEY (userID) REFERENCES users(id),
            shipName VARCHAR(50),
            shipAddress VARCHAR(128),
            subTotal DECIMAL(15,2),
            orderStatus VARCHAR(50) DEFAULT 'not complete',
            paymentMethod VARCHAR(50),
            paymentStatus VARCHAR(50),
            dateOrder timestamp DEFAULT current_timestamp(),
            modified timestamp
        )`,
    );
    return;
}

module.exports = {
    createTableOrders,
};
