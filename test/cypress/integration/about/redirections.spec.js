context('Projects Redirections', () => {
    beforeEach(() => {
        // Given the About page is shown
        cy.visit('/about')
    });

    // This list parametrizes the test case below and basically represents our gherkin table
    [
        {
            navigationItem: "Logo",
            page: "/"
        },
        {
            navigationItem: "Instagram",
            page: "/instagram"
        },
        {
            navigationItem: "Projects",
            page: "/projects"
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

})
