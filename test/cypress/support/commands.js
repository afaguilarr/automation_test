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
    cy.contains(navigationItem).click()
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
    url = url.startsWith('/') ? "http://localhost:8000" + url : url
    cy.url().should('eq', url)
})
