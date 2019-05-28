Feature: Purchase order from shopping cart

    Scenario:Verify whether customer should be able to login to shopping cart
        Given I navigate to login page
        When I click 'Signin' tab
        And I am logging using username as "harshana.p@gapstars.net" and password as "Test@123"
        Then I can see account page as:
            | Page_heading |
            | MY ACCOUNT   |

    Scenario:Verify whether customer should be able to checkout order
        Given I select 'Dresses' category
        When I choose 'Quick view' of 'Printed Dress'
        And I add quantity as two
        And I select size as medium
        And I select pink color
        And I click 'Add to cart' button
        And I click 'Proceed to checkout' button
        Then I can see total price of the order as:
            | Total_price |
            | $108.14     |

