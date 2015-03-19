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

var formatDatatoPaypal = function (details) {
	return {
		"payer": {
			"payment_method": "credit_card",
			"funding_instruments": [{
				"credit_card": {
					"type": details.method,
					"number": details.cardNumber,
					"expire_month": details.month,
					"expire_year": details.year,
					"cvv2": details.cvv,
					"first_name": details.firstName,
					"last_name": details.lastName
				}
			}],
			"transactions": [{
				"amount": {
					"total": details.price,
					"currency": details.currency
				},
				"description": "This is the payment transaction description."
			}]
		}
	};
	
};
module.exports = {
	
	payment: function (paymentDetails) {
		var formattedPaymentDetail = formatDatatoPaypal(paymentDetails);

		paypal.creditCard.create(formattedPaymentDetail, function(error, creditCard) {

			if(error) {
				return error;
			} else {
				console.log("Create Credit-Card Response");
				return creditCard;
			}
		});
	}
};