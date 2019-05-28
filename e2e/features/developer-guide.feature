Feature: WebdriverIO developer guide

    Scenario:Verify whether user should be able to access WebdriverIO developer guide
        Given I navigate to 'WebdriverIO' home page
        When I click 'Get Started' button at the bottom
        Then I can see the 'WebdriverIO' developer guide
            | Page_title      |
            | DEVELOPER GUIDE |



