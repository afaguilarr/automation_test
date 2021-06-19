context('Home Content', () => {

    it(`The home page content is correctly shown`, () => {
        // When a visitor requests the home page
        cy.visit('/')

        // Then the home page is shown
        cy.pageIsShown('/')
    });

})
