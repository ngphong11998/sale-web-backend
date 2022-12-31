// var mysql = require("mysql");
// const APP_CONFIG = require("../configs/index");

// const config = require("./");
// async function connect() {
//   console.log(`Function connect to DB`);
//   var con = mysql.createConnection({
//     host: APP_CONFIG.DB_HOST,
//     port: APP_CONFIG.DB_PORT,
//     user: APP_CONFIG.DB_USERNAME,
//     password: APP_CONFIG.DB_PASSWORD,
//     database: APP_CONFIG.DB_NAME,
//   });
//   con.connect(function (err) {
//     if (err) {
//       console.log(`Error when connect DB: `, err);
//       throw err;
//     }
//     console.log("DB Connected!");
//   });

//   return con;
// }

// module.exports = {
//   connect,
// };
