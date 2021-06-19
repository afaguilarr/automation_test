Feature: Projects Redirections
  As a portfolio visitor,
  I want all elements to redirect me to the right locations,
  So that I'm able to navigate successfully through the portfolio.

  Background:
    Given the Projects page is shown

  Scenario Outline: The sidebar navigation items redirect to the expected locations
    When a visitor clicks on the <navigation_item> navigation item
    Then the <page> page is shown

    Examples:
      | navigation_item | page       |
      | Logo            | /          |
      | Instagram       | /instagram |
      | About           | /about     |

  Scenario Outline: The footer items redirect to the expected locations
    When a visitor clicks on the <footer_item> footer item
    Then the <page> page is shown

    Examples:
      | footer_item | page                                                                            |
      | Theme       | https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-jodie |
      | LekoArts    | https://www.lekoarts.de/en                                                      |

  Scenario Outline: The layout elements redirect to the expected locations
    When a visitor clicks on the <layout_element> layout element
    Then the <page> page is shown

    Examples:
      | layout_element | page                                   |
      | Color          | /color-in-all-its-glory                |
      | Extreme Neon   | /extreme-neon-what-is-this-trend-about |
      | Breakfast      | /breakfast                             |
      | Black & White  | /black-white-superb-art                |
