var sinon = require('sinon');
var expect = require('chai').expect;

var paypal = require('paypal-rest-sdk');
var paypalGateway = require("../../app/helpers/paypal");

describe("Paypal", function() {
	
	it('should call "paypal" CreditCard create method', function(done) {
		var paymentDetails = {"intent": "sale",
			"payer": {
				"payment_method": "credit_card",
				"funding_instruments": [{
					"credit_card": {
						"type": "visa",
						"number": "4417119669820331",
						"expire_month": "11",
						"expire_year": "2018",
						"cvv2": "874",
						"first_name": "Joe",
						"last_name": "Shopper",
						"billing_address": {
							"line1": "52 N Main ST",
							"city": "Johnstown",
							"state": "OH",
							"postal_code": "43210",
							"country_code": "US"
						}
					}
				}]
			},
			"transactions": [{
				"amount": {
					"total": "7",
					"currency": "USD",
					"details": {
						"subtotal": "5",
						"tax": "1",
						"shipping": "1"
					}
				},
				"description": "This is the payment transaction description."
			}]
		};
		
		var payPalSpy = sinon.spy(paypal.creditCard, 'create');
		paypalGateway.payment(paymentDetails);
		expect(payPalSpy.called).to.equal(true);
		done();
	});
	
});