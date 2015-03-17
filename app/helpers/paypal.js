'use strict';

var paypal = require('paypal-rest-sdk');
var paypalConfig = require('../../config/config').paypal;
var logger = require('morgan');

if (!paypalConfig) {

	console.error("Unable to create config for Paypal");
	return;
}

paypal.configure({

	'mode': paypalConfig.mode,
	'client_id': paypalConfig.clientId,
	'client_secret': paypalConfig.clientSecret
});


module.exports = {
	
	payment: function (paymentDetails) {

		paypal.creditCard.create(paymentDetails, function(error, creditCard) {

			if(error) {
				return error;
			} else {
				console.log("Create Credit-Card Response");
				return creditCard;
			}
		});
	}
};