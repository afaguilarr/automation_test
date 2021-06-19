Feature: Black & White Content
  As a portfolio visitor,
  I want the Black & White page elements to be correctly shown,
  So that I can see the content I'm interested in.

  Scenario: The Black & White page content is correctly shown
    When a visitor requests the Projects page
    Then the Black & White page is shown
