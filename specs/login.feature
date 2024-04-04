Feature: Login

  Scenario: Login with valid credentials
    Given I am on the login page
    When I type "exempel@school.net" in "#email"
    And I type "abc123" in "#password"
    And I click the submit button
    Then I should see a logout button



