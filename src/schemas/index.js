const { connect } = require('./database');
const { createTableVendors } = require('./vendors');
const { createTableCategories } = require('./categories');
const { createTableProducts } = require('./products');
const { createTablePurchases } = require('./purchases');
const { createTableUsers } = require('./users');
const { createTableOrders } = require('./orders');
const { createTableOrderDetail } = require('./orderDetail');

const initDatabase = async () => {
    const pool = connect();

    await createTableVendors(pool);
    await createTableCategories(pool);
    await createTableProducts(pool);
    await createTablePurchases(pool);
    await createTableUsers(pool);
    await createTableOrders(pool);
    await createTableOrderDetail(pool);

    pool.end(function (err) {
        if (err) throw err;
        console.log("Closed!");
    });
};

module.exports = {
    initDatabase
};

