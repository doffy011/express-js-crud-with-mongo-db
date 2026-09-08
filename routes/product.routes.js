const express = require('express');
const router = express.Router();
const createProduct = require('../controller/product.controller');

//router.post(['/', '/create'], createProduct.createProduct);
router.route('/').post(createProduct.createProduct);
module.exports = router;                                                                                                