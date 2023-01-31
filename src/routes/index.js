const categoryRouter = require("../modules/categories/router");
const productRouter = require("../modules/products/router");
const vendorRouter = require("../modules/vendors/router");
const purchaseRouter = require("../modules/purchases/router");
const userRouter = require("../modules/users/router");

module.exports = {
    categoryRouter: categoryRouter,
    productRouter: productRouter,
    vendorRouter: vendorRouter,
    purchaseRouter: purchaseRouter,
    userRouter: userRouter,
};
