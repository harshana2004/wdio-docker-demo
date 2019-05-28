const page = require("./page");

class ShoppingCartPage extends page {
    /**
    * Define page elements
    */
    get btnSigninTab() { return browser.element('a.login'); }
    get txtUsername() { return browser.element('//*[@name="email"]'); }
    get txtPassword() { return browser.element('//*[@name="passwd"]'); }
    get btnSignin() { return browser.element('//*[@name="SubmitLogin"]'); }
    get lblH1Account() { return browser.element('h1.page-heading'); }
    get btnDressCat() { return browser.element('[title=\'Dresses\']'); }
    get btnQuickViewItem() { return browser.element('[title=\'Printed Dress\'][src=\'http://automationpractice.com/img/p/1/0/10-home_default.jpg\']'); }
    get btnAddQuantity() { return browser.element('.button-plus'); }
    get btnSize() { return browser.element('.attribute_select [title=\'M\']'); }
    get btnColor() { return browser.element('[name=\'Pink\']'); }
    get btnAddCart() { return browser.element('[name=\'Submit\']'); }
    get btnCheckOut() { return browser.element('[title=\'Proceed to checkout\']'); }
    get lblTotalPrice() { return browser.element('#total_price'); }


    /* Overwrite page method */
    openPage() {
        super.open('http://automationpractice.com') //Navigate to e-commerce web site
    }

    /* Overwrite page method */
    login(Username, Password) {
        this.txtUsername.setValue(Username);
        this.txtPassword.setValue(Password);
        this.btnSignin.click();
    }

    /* Get account page title */
    getTitleAccountPage() {
        return this.lblH1Account.getText();
    }

    /* Get total price */
    getTotalPrice() {
        this.lblTotalPrice.waitForVisible();
        return this.lblTotalPrice.getText();
    }

    /* Select dress category */
    selectDressCategory() {
        browser.execute(function (elem) {
            document.querySelector(elem).click();
        }, this.btnDressCat.selector);

    }

    /* Checkout order */
    checkoutOrder() {
        browser.execute(function (elem) {
            document.querySelector(elem).click();
        }, this.btnCheckOut.selector);
    }


}
module.exports = new ShoppingCartPage();