context('Colors Content', () => {

    it(`The Colors page content is correctly shown`, () => {
        // When a visitor requests the Colors page
        cy.visit('/color-in-all-its-glory')

        // Then the Colors page is shown
        cy.pageIsShown('/color-in-all-its-glory')
    });

})
