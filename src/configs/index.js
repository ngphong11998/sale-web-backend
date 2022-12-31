require("dotenv").config();

const env = process.env.environment || "local";

const localConfig = require("./local.config");
const devConfig = require("./dev.config");
const prodConfig = require("./prod.config");

const config = () => {
  const CONFIG = {
    local: localConfig,
    dev: devConfig,
    prod: prodConfig,
  };

  return CONFIG[env];
};
const APP_CONFIG = config();

module.exports = APP_CONFIG;
