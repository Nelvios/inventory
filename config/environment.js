'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'inventory',
    environment,
    rootURL: '/',
    locationType: 'auto',

    firebase: {
      apiKey: "AIzaSyBX9ZqJYPwxdFgCL1TqJvKCOx_K5wC3Ne4",
      authDomain: "itbca-asset-tracker.firebaseapp.com",
      databaseURL: "https://itbca-asset-tracker.firebaseio.com",
      projectId: "itbca-asset-tracker",
      storageBucket: "itbca-asset-tracker.appspot.com",
      messagingSenderId: "485997428480",
      appId: "1:485997428480:web:6f182f94af51b9263efde5",
      measurementId: "G-VNPZ3YSNQL"
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
