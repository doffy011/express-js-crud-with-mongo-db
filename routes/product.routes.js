const express = require('express');
const router = express.Router();
// const createProduct = require('../controller/product.controller');
const { createProduct, getAllProducts, getProductById, updateProductById, deleteProductById } = require('../controller/product.controller');

router.route('/').post(createProduct).get(getAllProducts);
router.route('/:id').get(getProductById).put(updateProductById).delete(deleteProductById);

// router.route('/').post(createProduct.createProduct);
module.exports = router;                                                                                                