const page = require('./page');

class WdioLoginPage extends page {

    /**
    * Define page elements
    */
    get btnStartButton() { return browser.element('a.getstarted.button'); }
    get txtDevGuideTitle() { return browser.element('h1#Developer-Guide'); }

    /* Navigate to wdio home page */
    openHomePage() {
        browser.url('/');
    }

    /* Click webdriverio get start button */
    clickStartBtn() {
        this.btnStartButton.scroll();
        this.btnStartButton.click();
    }

    /* Get title of the developer guide page */
    getDevGuideTitle() {
        this.txtDevGuideTitle.isVisible();
        return this.txtDevGuideTitle.getText();
    }
}
module.exports = new WdioLoginPage();