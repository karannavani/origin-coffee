const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  beverage: String,
  price: Number,
  type: [ { choice: String, price: Number} ],
  extras: [ { choice: String, price: Number} ]
});

module.exports = mongoose.model('Item', itemSchema);
