const { Given, When, Then } = require("cucumber");
const wdioLoginPage = require("../page_objects/guide-po");

// *** belongs to webdriverio use cases
Given('I navigate to \'WebdriverIO\' home page', () => {
    wdioLoginPage.openHomePage();
});
When('I click \'Get Started\' button at the bottom', () => {
    wdioLoginPage.clickStartBtn(); // Navigate to developer guide info
});
Then('I can see the \'WebdriverIO\' developer guide', table => {
    const pageHeading = table.rows()[0][0];
    global.assert.equal(wdioLoginPage.getDevGuideTitle(), pageHeading, 'Page title is not matched'); // Verify developer guide loaded successfully
});
