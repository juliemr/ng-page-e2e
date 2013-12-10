describe('angularjs home page', function() {
  var angularPage = require('./angularsite_page.js');

  beforeEach(function() {
    angularPage.navigate();
  })

  it('should show localization info in the tabs', function() {
    expect(angularPage.usTabContent.getText()).toMatch('Number: 98,765.432');
  });

  it('should switch to the pluralization tab', function() {
    angularPage.tabs.get(1).click();
    expect(angularPage.usTabContent.getText()).toMatch('no beers');
  });
});
