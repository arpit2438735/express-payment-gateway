'use strict';

var paypalHelper = require('../helpers/paypal');
var paypalAcceptCurrency = require('../../config/config').paypal.acceptCurrency;

module.exports = {
	
	startProcess: function(paymentDetails, next) {
		if (paymentDetails.method.toUpperCase() === 'AMEX' &&
			paymentDetails.currency.toUpperCase() === 'USD') {
			return paypalHelper.payment(paymentDetails);
		}

		if (paymentDetails.method.toUpperCase() === 'AMEX' && 
			paymentDetails.currency.toUpperCase() !== 'USD') {
			return next("AMEX possible for USD only.");
		}

		if(paymentDetails.method.toUpperCase() !== 'AMEX' &&
			paypalAcceptCurrency.indexOf(paymentDetails.currency.toUpperCase()) >= 0) {
			return paypalHelper.payment(paymentDetails);
		}
	}
	
};