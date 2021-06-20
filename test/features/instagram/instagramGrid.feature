Feature: Instagram Grid
  As a portfolio visitor,
  I want the Instagram Grid elements to reflect the info on Instagram,
  So that I can see interact with social media from the portfolio.

  Scenario: The Instagram grid shows the requested instagram info
    Given that there are some random instagram posts
    When a visitor requests the Instagram page
    Then the expected instagram elements are shown

  Scenario: The Instagram grid elements redirect to the external instagram post
    Given that there is 1 instagram post
    And the Instagram page is shown
    When a visitor clicks on an Instagram grid element
    Then the external instagram post is shown

  Scenario: Each Instagram grid element contains the expected info
    Given that there is 1 instagram post
    When a visitor requests the Instagram page
    Then the instagram grid element contains the expected info

  Scenario: Hovering over each Instagram grid element shows the expected info
    Given that there is 1 instagram post
    And the Instagram page is shown
    When the visitor hovers over the Instagram grid element
    Then the expected elements are not hidden anymore
