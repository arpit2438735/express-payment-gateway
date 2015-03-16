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
    db: 'mongodb://localhost/express-payment-gateway-development'
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