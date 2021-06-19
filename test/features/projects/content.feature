Feature: Projects Content
  As a portfolio visitor,
  I want the Projects page elements to be correctly shown,
  So that I can see the content I'm interested in.

  Scenario: The Projects page content is correctly shown
    When a visitor requests the Projects page
    Then the Projects page is shown
