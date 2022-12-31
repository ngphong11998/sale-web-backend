const express = require('express')
const router = express.Router()
const { createProductController } = require('../controllers/products/create-product.controllers')
const createCategoryController = require('../controllers/categories/create-category.controller')

router.post('product/create', createProductController)
router.post('category/create', createCategoryController)

module.exports = {
    router
}