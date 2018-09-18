const Company = require('../models/order');

function ordersIndex(req, res, next) {
  Company.find()
    .then(orders => res.json(orders))
    .catch(next);
}

function ordersShow(req, res, next) {
  Company.findById(req.params.id)
    .then(order => res.json(order))
    .catch(next);
}

function ordersCreate(req, res, next) {
  Company.create(req.body)
    .then(order => res.json(order))
    .catch(next);
}

function ordersUpdate(req, res, next) {
  Company.findById(req.params.id)
    .then(order => order.set(req.body))
    .then(order => order.save())
    .then(order => res.json(order))
    .catch(next);
}

function ordersDelete(req, res, next) {
  Company.findById(req.params.id)
    .then(order => order.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}




module.exports = {
  index: ordersIndex,
  show: ordersShow,
  create: ordersCreate,
  update: ordersUpdate,
  delete: ordersDelete
};
