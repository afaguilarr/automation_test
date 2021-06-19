Feature: Black & White Redirections
  As a portfolio visitor,
  I want all elements to redirect me to the right locations,
  So that I'm able to navigate successfully through the portfolio.

  Background:
    Given the Black & White page is shown

  Scenario Outline: The sidebar navigation items redirect to the expected locations
    When a visitor clicks on the <navigation_item> navigation item
    Then the <page> page is shown

    Examples:
      | navigation_item | page       |
      | Logo            | /          |
      | Projects        | /projects  |
      | Instagram       | /instagram |
      | About           | /about     |

  Scenario Outline: The footer items redirect to the expected locations
    When a visitor clicks on the <footer_item> footer item
    Then the <page> page is shown

    Examples:
      | footer_item | page                                                                            |
      | Theme       | https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-jodie |
      | LekoArts    | https://www.lekoarts.de/en                                                      |
