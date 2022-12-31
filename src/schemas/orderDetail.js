async function createTableOrderDetail(pool) {
    pool.query(
        `CREATE TABLE IF NOT EXISTS orderDetail (
            id INT AUTO_INCREMENT PRIMARY KEY,
            orderID INT,
            CONSTRAINT orderDetail_link_orders FOREIGN KEY(orderID) REFERENCES orders(id),
            productID INT,
            CONSTRAINT orderDetail_link_products FOREIGN KEY(productID) REFERENCES products(id),
            price DECIMAL(15,4),
            quantity INT,
            amount DECIMAL(15,4))`
    );
    return;
}

module.exports = {
    createTableOrderDetail
};