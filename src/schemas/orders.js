async function createTableOrders(pool) {
    pool.query(
        `CREATE TABLE IF NOT EXISTS orders (
            id INT AUTO_INCREMENT  PRIMARY KEY,
            userID INT,
            CONSTRAINT saleOrders_link_users FOREIGN KEY (userID) REFERENCES users(id),
            amount DECIMAL(15,4),
            orderStatus VARCHAR(50) DEFAULT 'CartItems',
            shipName VARCHAR(50),
            shipAddress VARCHAR(128),
            paymentMethod VARCHAR(50),
            paymentStatus VARCHAR(50),
            dateOrder DATE
        )`
    );
    return;
}

module.exports = {
    createTableOrders
};