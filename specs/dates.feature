Feature: Dates
  Check that all dates in the schedule are correct.

  Background:
    Given that I am logged in


  Scenario: Check dates
    When I am on the schedule page
    Then the dates should be correct

  Scenario: Go to today
    When I click on today
    Then the schedule should highlight today

