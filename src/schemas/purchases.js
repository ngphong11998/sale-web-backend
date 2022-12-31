//vendor: nha cung cap

async function createTablePurchases(pool) {
    pool.query(`CREATE TABLE IF NOT EXISTS purchases (
        id INT AUTO_INCREMENT PRIMARY KEY,
        vendorID INT,
        productID INT,
        quantity INT NOT NULL,
        datePurchase DATE,
        CONSTRAINT purchase_link_vendors FOREIGN KEY (vendorID) REFERENCES vendors(id),
        CONSTRAINT purchase_link_products FOREIGN KEY (productID) REFERENCES products(id)
    )`);
    return;
};

module.exports = {
    createTablePurchases
};