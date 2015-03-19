var sinon = require('sinon');
var expect = require('chai').expect;

var paypalGateway = require("../../app/helpers/paypal");
var payment = require("../../app/services/payment");
var paypalAcceptCurrency = require('../../config/config').paypal.acceptCurrency;
var payPalSpy;

describe("Payment Service", function() {

	it('should call "paypalGateway" method when method is "AMEX" and currency is "USD"', function(done) {

		var paymentDetails = {
			method: "AMEX",
			currency: "USD"

		};
		payPalSpy = sinon.spy(paypalGateway, 'payment');
		payment.startProcess(paymentDetails);

		expect(payPalSpy.called).to.equal(true);
		done();
	});


	it('should call "paypalGateway" method when currency are of same config type', function(done) {

		var paymentDetails = {
			method: "",
			currency: paypalAcceptCurrency[1]

		};
		payment.startProcess(paymentDetails);

		expect(payPalSpy.called).to.equal(true);
		done();
	});

	it('should not call "paypalGateway" method when currency is not "USD" and method is "AMEX"', function(done) {
		var paymentDetails = {
			method: "AMEX",
			currency: paypalAcceptCurrency[1]
		};

		var spy = sinon.spy();
		payment.startProcess(paymentDetails, spy);

		expect(payPalSpy.calledTwice).to.equal(true);
		expect(spy.called).to.equal(true);
		done();
	});

});