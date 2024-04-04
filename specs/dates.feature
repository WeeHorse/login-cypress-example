Feature: Dates
  Check that all dates in the schedule are correct.

  Scenario: Check dates
    Given that I am logged in
    And I am on the schedule page
    Then the dates should be correct

