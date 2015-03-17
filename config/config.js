var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'express-payment-gateway'
    },
    port: 3000,
    db: 'mongodb://localhost/express-payment-gateway-development',
    paypal: {
      mode: "sandbox",
      clientId: "Aefyg1xBNNyTzKNCVVc8lMpbNK7pkLRZX1LrnYkC5E0X35n61_DpvRwTThG65ioKc8nOikQ7mDJR62c1",
      clientSecret: "EMkeJ10s1yEg7oj8yi4cvUbXEUpL-lHFM9RZIcUl8EfDZg77jnY6bfuY9kduUopL-HcEYqCnhm5efMTG"
    },
    braintree: {
      merchantId: "r3hdp53gc5ws5mdb",
      publicKey: "pfx2nr6y4yhsfjq9",
      privateKey: "7fd5d44f67381d641b41fd997a6491e6"
    }
  },

  test: {
    root: rootPath,
    app: {
      name: 'express-payment-gateway'
    },
    port: 3000,
    db: 'mongodb://localhost/express-payment-gateway-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'express-payment-gateway'
    },
    port: 3000,
    db: 'mongodb://localhost/express-payment-gateway-production'
  }
};

module.exports = config[env];
