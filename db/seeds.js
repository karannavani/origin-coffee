const mongoose = require('mongoose');
const { dbUri } = require('../config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbUri);
const Item = require('../models/item');

const itemData = [
  {
    beverage: 'Coffee',
    type: [
      { choice: 'Latte', price: 2.50},
      { choice: 'Cappuccino', price: 2.50},
      { choice: 'Flat White', price: 2.50},
      { choice: 'Espresso', price: 2.00}
    ],
    extras: [
      { choice: 'Extra Shot', price: 1.00},
      { choice: 'Chocolate', price: 0.50},
      { choice: 'Vanilla', price: 0.50},
      { choice: 'Caramel', price: 0.50},
      { choice: 'Ginger', price: 0.50},
      { choice: 'Honey', price: 0.50}
    ]
  },
  {
    beverage: 'Tea',
    price: 2.00,
    extras: [
      { choice: 'Mint', price: 0.50},
      { choice: 'Ginger', price: 0.50},
      { choice: 'Honey', price: 0.50}
    ]
  }
];

Item.collection.drop();

Item.create(itemData)
  .then(items => console.log(`Created ${items.length} items`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
