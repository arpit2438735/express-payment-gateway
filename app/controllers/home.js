var express = require('express'),
    router = express.Router(),
    mongoose = require('mongoose'),
    paymentMethod = require('../../app/services/payment');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res) {
    res.render('index');
});

router.post('/payment', function(req, res, next) {
    return paymentMethod.startProcess(req.body, next);
});
