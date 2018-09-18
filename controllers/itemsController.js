const Company = require('../models/item');

function itemsIndex(req, res, next) {
  Company.find()
    .then(items => res.json(items))
    .catch(next);
}

module.exports = {
  index: itemsIndex
};
