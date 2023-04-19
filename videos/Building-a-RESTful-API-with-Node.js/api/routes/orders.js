
const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Order = require('../models/order');
const Product = require('../models/products');

const OrdersController = require('../controllers/orders');


// handling routes

router.get('/', OrdersController.orders_get_all);
router.post('/', OrdersController.orders_post);
router.get('/:orderId', OrdersController.orders_get_order);
router.delete('/:orderId', OrdersController.orders_delete_order);

module.exports = router;
