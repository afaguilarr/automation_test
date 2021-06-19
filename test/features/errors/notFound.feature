Feature: Not Found Page
  As a portfolio visitor,
  I want to see an error page if I request a wrong url,
  So that it's clear to me that the page doesn't exist but the system has not crashed.

  Scenario: A proper error page is shown when a non-existent url is requested
    When a visitor requests a non-existent url
    Then the not found page is shown

  Scenario: The not found page contains the expected content
    When a visitor requests the not found page
    Then the not found page is shown

  Scenario Outline: The sidebar navigation items redirect to the expected locations
    Given the not found page is shown
    When a visitor clicks on the <navigation_item> navigation item
    Then the <page> page is shown

    Examples:
      | navigation_item | page       |
      | Logo            | /          |
      | Projects        | /projects  |
      | Instagram       | /instagram |
      | About           | /about     |

  Scenario Outline: The footer items redirect to the expected locations
    Given the not found page is shown
    When a visitor clicks on the <footer_item> footer item
    Then the <page> page is shown

    Examples:
      | footer_item | page                                                                            |
      | Theme       | https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-jodie |
      | LekoArts    | https://www.lekoarts.de/en                                                      |
