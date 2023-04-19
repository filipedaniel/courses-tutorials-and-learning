
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Product = require('../models/products');

const ProductController = require('../controllers/products');

// handling routes

router.get('/', ProductController.products_get_all);
router.post('/', ProductController.products_post_product);
router.get('/:productId', ProductController.products_get_product);
router.patch('/:productId', ProductController.products_patch_product);
router.delete('/:productId', ProductController.products_delete_product);

module.exports = router;
