var mysql = require("mysql");
const APP_CONFIG = require("../configs/index");

const { createTableVendors } = require("./vendors");
const { createTableCategories } = require("./categories");
const { createTableProducts } = require("./products");
const { createTablePurchases } = require("./purchases");
const { createTableUsers } = require("./users");
const { createTableOrders } = require("./orders");
const { createTableOrderDetail } = require("./orderDetail");

const initDatabase = async (pool) => {
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
  return;
};

let dbConfig = {
  pool: null,
  connect: false,
};
async function connect() {
  var pool = mysql.createConnection({
    host: APP_CONFIG.DB_HOST,
    // port: APP_CONFIG.DB_PORT,
    user: APP_CONFIG.DB_USERNAME,
    password: APP_CONFIG.DB_PASSWORD,
    database: APP_CONFIG.DB_NAME,
  });
  pool.connect(function (err) {
    if (err) {
      console.log(`Error when connect DB: `, err);
      throw err;
    }
    console.log("DB Connected!");
  });

  dbConfig.pool = pool;
  dbConfig.connect = true;

  await initDatabase(pool);

  return pool;
}

module.exports = {
  connect,
  dbConfig,
};
