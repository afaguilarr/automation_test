Feature: HomePage Content
  As a portfolio visitor,
  I want the home page elements to be correctly shown,
  So that I can see the content I'm interested in.

  Scenario: The home page content is correctly shown
    When a visitor requests the home page
    Then the <page> page is shown
