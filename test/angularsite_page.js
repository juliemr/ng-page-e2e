/**
 * This file uses the Page Object pattern to define a test for
 * angularjs.org.
 */

var AngularPage = function() {

  this.usTabContent = element(by.css('[module=app-us] .tab-content'));

  this.tabs = element.all(by.repeater('pane in panes'));

  this.navigate = function() {
    browser.get('http://www.angularjs.org');
  };
};


module.exports = new AngularPage();
