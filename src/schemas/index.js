const { connect } = require('./database');
const { createTableVendors } = require('./vendors');
const { createTableCategories } = require('./categories');
const { createTableProducts } = require('./products');
const { createTablePurchases } = require('./purchases');
const { createTableUsers } = require('./users');
const { createTableOrders } = require('./orders');
const { createTableOrderDetail } = require('./orderDetail');


const pool = connect();
const initDatabase = async () => {

    await createTableVendors(pool);
    await createTableCategories(pool);
    await createTableProducts(pool);
    await createTablePurchases(pool);
    await createTableUsers(pool);
    await createTableOrders(pool);
    await createTableOrderDetail(pool);

    // //tạo những bảng không có khóa ngoại trước
    // await Promise.all([
    //     createTableVendors(pool),
    //     createTableCategories(pool),
    //     createTableProducts(pool),
    //     createTablePurchases(pool),
    //     createTableUsers(pool),
    //     createTableOrders(pool),
    //     createTableOrderDetail(pool)
    // ])


    // pool.end(function (err) {
    //     if (err) throw err;
    //     console.log("Closed!");
    // });
};

module.exports = {
    initDatabase,
    pool
};

