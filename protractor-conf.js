// An example configuration file.
exports.config = {
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // For speed, let's just use the Chrome browser.
  chromeOnly: true,

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/*.js'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
