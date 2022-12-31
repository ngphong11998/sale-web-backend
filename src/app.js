const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const APP_CONFIG = require("./configs/index");
const { connect } = require("./schemas/index");
const router = require("./routes");

const start = async () => {
  //Use support package/library
  app.use(cors());
  app.use(bodyParser.json());

  //Connect and init database
  const pool = await connect();
  APP_CONFIG.pool = pool;

  // Connect to route
  for (const key in router) {
    app.use("/", router[key]);
  }

  app.use("/category", router.categoryRouter);

  //Start server
  app.listen(APP_CONFIG.PORT, () => {
    console.log(`APP LISTEN AT http://${APP_CONFIG.HOST}:${APP_CONFIG.PORT}`);
  });
};

start();
