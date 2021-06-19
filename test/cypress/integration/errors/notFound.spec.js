context('Not Found Page', () => {

    it(`A proper error page is shown when a non-existent url is requested`, () => {
        // When a visitor requests a non-existent url
        cy.visit('/nonExistent')

        // Then the not found page is shown
        cy.pageIsShown("/404")
    });

    it(`The not found page contains the expected content`, () => {
        // When a visitor requests the not found page
        cy.visit('/404')

        // Then the not found page is shown
        cy.pageIsShown("/404")
    });

    // This list parametrizes the test case below and basically represents our gherkin table
    [
        {
            navigationItem: "Logo",
            page: "/"
        },
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
            // Given the not found page is shown
            cy.visit('/404')

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
            // Given the not found page is shown
            cy.visit('/404')

            // When a visitor clicks on the <footer_item> footer item
            cy.clickFooterItem(scenario.footerItem)

            // Then the <page> page is shown
            cy.pageIsShown(scenario.page)
        })
    });

})
