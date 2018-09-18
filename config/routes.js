const express = require('express');
const Router = express.Router();

const itemsController = require('../controllers/itemsController');
const ordersController = require('../controllers/ordersController');

Router.route('/')
  .get((req, res) => {
    res.send('Welcome to Express');
  });

Router.route('/items')
  .get(itemsController.index);

Router.route('/order')
  .get(ordersController.index);


module.exports = Router;
