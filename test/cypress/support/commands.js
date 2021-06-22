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

import {
    assertAboutPageElements, assertBlackPageElements, assertBreakfastPageElements, assertColorsPageElements,
    assertHomePageElements,
    assertInstagramPageElements, assertNeonPageElements, assertNotFoundPageElements,
    assertProjectsPageElements
} from "./commonAssertions";

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

Cypress.Commands.add('setInstaNodes', (numberOfInstaNodes) => {
    cy.fixture('mockInstaNodes.json').then((mockInstaNodes) => {
        cy.task("generateFakeInstaNodes", { baseData: mockInstaNodes, numberOfInstaNodes: numberOfInstaNodes })
            .then((instaNodes) => {
                cy.wrap(instaNodes).as('instaNodes')
            })
    })
})
