const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.ObjectId, ref: 'Item' },
  customer: { name: String, email: String},
  total: Number
}, { timestamps: true });


module.exports = mongoose.model('Order', orderSchema);
