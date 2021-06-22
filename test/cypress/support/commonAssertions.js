function assertHeaderAndFooter(color) {
    cy.get(`[data-testid="sidebar"]`)
        .should('be.visible')
        .should('have.css', 'background-color', color)
    cy.get('footer')
        .should('be.visible')
        .should('have.css', 'background-color', color)
}

module.exports = {
    assertHomePageElements: function() {
        assertHeaderAndFooter("rgb(255, 255, 255)")
        cy.get(`[data-testid="About"] span`).should('contain', 'About')
        cy.get(`[data-testid="Instagram"] span`).should('contain', 'Instagram')
        cy.get(`[data-testid="Color"] span`).should('contain', 'Color')
        cy.get(`[data-testid="Extreme Neon"] span`).should('contain', 'Extreme Neon')
        cy.get(`[data-testid="Breakfast"] span`).should('contain', 'Breakfast')
    },

    assertProjectsPageElements: function() {
        assertHeaderAndFooter("rgb(255, 255, 255)")
        cy.get(`[data-testid="Color"] span`).should('contain', 'Color')
        cy.get(`[data-testid="Extreme Neon"] span`).should('contain', 'Extreme Neon')
        cy.get(`[data-testid="Breakfast"] span`).should('contain', 'Breakfast')
        cy.get(`[data-testid="Black & White"] span`).should('contain', 'Black & White')
    },

    assertInstagramPageElements: function() {
        assertHeaderAndFooter("rgb(0, 0, 0)")
        cy.get('.instagram-grid').should('be.visible')
    },

    assertAboutPageElements: function() {
        assertHeaderAndFooter("rgb(255, 255, 255)")
        cy.get('h1').should('contain', "About")
    },

    assertColorsPageElements: function() {
        cy.fixture('colorsInfo.json').then((colorsInfo) => {
            assertHeaderAndFooter(colorsInfo.color)
            cy.contains(colorsInfo.subTitle).should('be.visible')
            cy.get('h1').should('contain', colorsInfo.title)
            cy.contains(colorsInfo.firstParagraph).should('be.visible')
            cy.contains(colorsInfo.secondParagraph).should('be.visible')
            cy.contains(colorsInfo.thirdParagraph).should('be.visible')
            cy.get('main .gatsby-image-wrapper').should('have.length', colorsInfo.numberOfImages)
        })
    },

    assertNeonPageElements: function() {
        cy.fixture('neonInfo.json').then((neonInfo) => {
            assertHeaderAndFooter(neonInfo.color)
            cy.contains(neonInfo.subTitle).should('be.visible')
            cy.get('h1').should('contain', neonInfo.title)
            cy.contains(neonInfo.firstParagraph).should('be.visible')
            cy.contains(neonInfo.secondParagraph).should('be.visible')
            cy.get('main .gatsby-image-wrapper').should('have.length', neonInfo.numberOfImages)
        })
    },

    assertBreakfastPageElements: function() {
        cy.fixture('breakfastInfo.json').then((breakfastInfo) => {
            assertHeaderAndFooter(breakfastInfo.color)
            cy.contains(breakfastInfo.subTitle).should('be.visible')
            cy.get('h1').should('contain', breakfastInfo.title)
            cy.contains(breakfastInfo.firstParagraph).should('be.visible')
            cy.get('main .gatsby-image-wrapper').should('have.length', breakfastInfo.numberOfImages)
        })
    },

    assertBlackPageElements: function() {
        cy.fixture('blackInfo.json').then((blackInfo) => {
            assertHeaderAndFooter(blackInfo.color)
            cy.contains(blackInfo.subTitle).should('be.visible')
            cy.get('h1').should('contain', blackInfo.title)
            cy.get('main p').should('contain', blackInfo.firstParagraph)
            cy.get('main .gatsby-image-wrapper').should('have.length', blackInfo.numberOfImages)
        })
    },

    assertNotFoundPageElements: function () {
        assertHeaderAndFooter("rgb(255, 255, 255)")
        cy.get('h1').should('contain', "404")
        cy.get('p').should('contain', "Page not found.")
    }
}
