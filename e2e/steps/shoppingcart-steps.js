const { Given, When, Then } = require('cucumber');
const shoppingCart = require('../page_objects/shoppingcart-po');

// *** belongs to check out order in shopping cart
Given('I navigate to login page', () => {
    shoppingCart.openPage();
});

When('I click \'Signin\' tab', () => {
    shoppingCart.btnSigninTab.click(); //Navigate to login page
});

When(/^I am logging using username as "([^"]*)" and password as "([^"]*)"$/, (username, password) => { //Parameters send using reqular expression
    shoppingCart.login(username, password) // Login using username and password
});

Then('I can see account page as:', table => {
    const title = table.rows()[0][0];
    global.assert.equal(shoppingCart.getTitleAccountPage(), title, "Account page is failed to load");
});

Given('I select \'Dresses\' category', () => {
    browser.pause(2000);
    shoppingCart.selectDressCategory();
    
});

When('I choose \'Quick view\' of \'Printed Dress\'', () => {
    shoppingCart.btnQuickViewItem.waitForVisible();
    shoppingCart.btnQuickViewItem.click();
});

When('I add quantity as two', () => {
    shoppingCart.btnAddQuantity.click();
});

When('I select size as medium', () => {
    shoppingCart.btnSize.click();
});

When('I select pink color', () => {
    shoppingCart.btnColor.click();
});

When('I click \'Add to cart\' button', () => {
    shoppingCart.btnAddCart.click();
    browser.pause(2000);
});

When('I click \'Proceed to checkout\' button', () => {
    shoppingCart.checkoutOrder();
});

Then('I can see total price of the order as:', (table) => {
    const totalPrice = table.rows()[0][0];
    global.assert.equal(shoppingCart.getTotalPrice(), totalPrice, 'Price is mismatched');
});

