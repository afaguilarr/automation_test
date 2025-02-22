context('HomePage Redirections', () => {
    beforeEach(() => {
        // Given the home page is shown
        cy.visit('/')
    });

    // This list parametrizes the test case below and basically represents our gherkin table
    [
        {
            navigationItem: "Projects",
            page: "/projects"
        },
        {
            navigationItem: "Instagram",
            page: "/instagram"
        },
        {
            navigationItem: "About",
            page: "/about"
        }
    ].forEach((scenario) => {
        it(`The sidebar ${scenario.navigationItem} navigation item redirects to the expected location`, () => {
            // When a visitor clicks on the <navigation_item> navigation item
            cy.clickNavigationItem(scenario.navigationItem)

            // Then the <page> page is shown
            cy.pageIsShown(scenario.page)
        })
    });

    // This list parametrizes the test case below and basically represents our gherkin table
    [
        {
            footerItem: "Theme",
            page: "https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-jodie"
        },
        {
            footerItem: "LekoArts",
            page: "https://www.lekoarts.de/"
        }

    ].forEach((scenario) => {
        it(`The ${scenario.footerItem} footer item redirects to the expected location`, () => {
            // When a visitor clicks on the <footer_item> footer item
            cy.clickFooterItem(scenario.footerItem)

            // Then the <page> page is shown
            cy.pageIsShown(scenario.page)
        })
    });

    // This list parametrizes the test case below and basically represents our gherkin table
    [
        {
            layoutElement: "About",
            page: "/about"
        },
        {
            layoutElement: "Instagram",
            page: "/instagram"
        },
        {
            layoutElement: "Color",
            page: "/color-in-all-its-glory"
        },
        {
            layoutElement: "Extreme Neon",
            page: "/extreme-neon-what-is-this-trend-about"
        },
        {
            layoutElement: "Breakfast",
            page: "/breakfast"
        }
    ].forEach((scenario) => {
        it(`The ${scenario.layoutElement} layout element redirects to the expected location`, () => {
            // When a visitor clicks on the <layout_element> layout element
            cy.clickLayoutElement(scenario.layoutElement)

            // Then the <page> page is shown
            cy.pageIsShown(scenario.page)
        })
    });

})
