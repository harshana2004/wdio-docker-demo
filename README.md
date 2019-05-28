WebdriverIO-Cucumber Snippet 
============================
WebdriverIO tests with Cucumber bring true BDD experience to the stakeholders fledge with JavaScript. Project repositary is explains sample application usage with simple design pattens to fullfill business case.

### Prequisites
* NVM: https://github.com/nvm-sh/nvm
* Node.js + NPM/Yarn

### Setup
WebdriverIO cucumber support only available with WebdriverIO V@4.

* $ mkdir Wdio-first
* $ npm init -y 
* $ npm install webdriverio@4 : Installing WebdriverIO "^4.14.4" 
* $ npm install chai --save -dev

### Quick start
* Clone repo : https://github.com/harshana2004/wdio-cucumber.git
* $ npm install

### Configurations 
* Add script to package.json : "test": "./node_modules/.bin/wdio wdio.conf.js"
* Import the library in your code, and then pick one of the styles you'd like to use 
  either assert, expect  or should:

    before: function () {
        const chai = require('chai');
        global.expect = chai.expect;   // Using Assert style
        global.assert = chai.assert;   // Using Assert style
        global.should = chai.should(); // Using Assert style
    }

### Run test
* npm run test

### How to write tests
Tests are written in Gherkin syntax and need to add .feature file under features folder.

Feature: Google search

    Scenario:Verify whether user should be able to search records.
        Given I navigate to 'Google' home page
        When I enter 'Selenium automation' text in the search box
        And I press 'Google Search' button
        Then I can see the search results

### How to add steps
Steps can mapped with features as follows.

    Given('I navigate to \'Google\' home page', () => {
        //code snippet 
    });
    When('I enter \'Selenium automation\' text in the search box', () => {
        //code snippet 
    });
    When('I press \'Google Search\' button', () => {
        //code snippet 
    });
    Then('I can see the search results', table => {
        //code snippet 
    });
