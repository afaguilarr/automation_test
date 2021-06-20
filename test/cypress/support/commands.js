// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickNavigationItem', (navigationItem) => {
    if (navigationItem === "Logo") {
        cy.get(`[aria-label="Jodie, Back to Home"]`).click()
    } else {
        cy.get(`[data-testid="sidebar"]`).contains(navigationItem).click()
    }
})

Cypress.Commands.add('clickFooterItem', (footerItem) => {
    let locator = `[aria-label="Link to the theme's GitHub repository"]`
    if (footerItem === "LekoArts") {
        locator = `[aria-label="Link to the theme author's website"]`
    }
    cy.get(locator).click()
})

Cypress.Commands.add('clickLayoutElement', (layoutElement) => {
    let locator = `[data-testid="${layoutElement}"]`
    cy.get(locator).click()
})

Cypress.Commands.add('pageIsShown', (url) => {
    if (!url.startsWith('/')) {
        cy.url().should('eq', url)
    } else {
        cy.url().should('eq', Cypress.config().baseUrl + url)
        let assertElementsByURL = {
            "/": assertHomePageElements,
            "/projects": assertProjectsPageElements,
            "/instagram": assertInstagramPageElements,
            "/about": assertAboutPageElements,
            "/color-in-all-its-glory": assertColorsPageElements,
            "/extreme-neon-what-is-this-trend-about": assertNeonPageElements,
            "/breakfast": assertBreakfastPageElements,
            "/black-white-superb-art": assertBlackPageElements,
            "/404": assertNotFoundPageElements
        }
        assertElementsByURL[url]()
    }
})

function assertHeaderAndFooter(color) {
    cy.get(`[data-testid="sidebar"]`)
        .should('be.visible')
        .should('have.css', 'background-color', color)
    cy.get('footer')
        .should('be.visible')
        .should('have.css', 'background-color', color)

}

function assertHomePageElements() {
    assertHeaderAndFooter("rgb(255, 255, 255)")
    cy.get(`[data-testid="About"] span`).should('contain', 'About')
    cy.get(`[data-testid="Instagram"] span`).should('contain', 'Instagram')
    cy.get(`[data-testid="Color"] span`).should('contain', 'Color')
    cy.get(`[data-testid="Extreme Neon"] span`).should('contain', 'Extreme Neon')
    cy.get(`[data-testid="Breakfast"] span`).should('contain', 'Breakfast')
}

function assertProjectsPageElements() {
    assertHeaderAndFooter("rgb(255, 255, 255)")
    cy.get(`[data-testid="Color"] span`).should('contain', 'Color')
    cy.get(`[data-testid="Extreme Neon"] span`).should('contain', 'Extreme Neon')
    cy.get(`[data-testid="Breakfast"] span`).should('contain', 'Breakfast')
    cy.get(`[data-testid="Black & White"] span`).should('contain', 'Black & White')
}

function assertInstagramPageElements() {
    assertHeaderAndFooter("rgb(0, 0, 0)")
    cy.get('.instagram-grid').should('be.visible')
}

function assertAboutPageElements() {
    assertHeaderAndFooter("rgb(255, 255, 255)")
    cy.get('h1').should('contain', "About")
}

function assertColorsPageElements() {
    cy.fixture('colorsInfo.json').then((colorsInfo) => {
        assertHeaderAndFooter(colorsInfo.color)
        cy.contains(colorsInfo.subTitle).should('be.visible')
        cy.get('h1').should('contain', colorsInfo.title)
        cy.contains(colorsInfo.firstParagraph).should('be.visible')
        cy.contains(colorsInfo.secondParagraph).should('be.visible')
        cy.contains(colorsInfo.thirdParagraph).should('be.visible')
        cy.get('main .gatsby-image-wrapper').should('have.length', colorsInfo.numberOfImages)
    })
}

function assertNeonPageElements() {
    cy.fixture('neonInfo.json').then((neonInfo) => {
        assertHeaderAndFooter(neonInfo.color)
        cy.contains(neonInfo.subTitle).should('be.visible')
        cy.get('h1').should('contain', neonInfo.title)
        cy.contains(neonInfo.firstParagraph).should('be.visible')
        cy.contains(neonInfo.secondParagraph).should('be.visible')
        cy.get('main .gatsby-image-wrapper').should('have.length', neonInfo.numberOfImages)
    })
}

function assertBreakfastPageElements() {
    cy.fixture('breakfastInfo.json').then((breakfastInfo) => {
        assertHeaderAndFooter(breakfastInfo.color)
        cy.contains(breakfastInfo.subTitle).should('be.visible')
        cy.get('h1').should('contain', breakfastInfo.title)
        cy.contains(breakfastInfo.firstParagraph).should('be.visible')
        cy.get('main .gatsby-image-wrapper').should('have.length', breakfastInfo.numberOfImages)
    })
}

function assertBlackPageElements() {
    cy.fixture('blackInfo.json').then((blackInfo) => {
        assertHeaderAndFooter(blackInfo.color)
        cy.contains(blackInfo.subTitle).should('be.visible')
        cy.get('h1').should('contain', blackInfo.title)
        cy.get('main p').should('contain', blackInfo.firstParagraph)
        cy.get('main .gatsby-image-wrapper').should('have.length', blackInfo.numberOfImages)
    })
}

function assertNotFoundPageElements() {
    assertHeaderAndFooter("rgb(255, 255, 255)")
    cy.get('h1').should('contain', "404")
    cy.get('p').should('contain', "Page not found.")
}