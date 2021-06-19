context('About Content', () => {

    it(`The About page content is correctly shown`, () => {
        // When a visitor requests the home page
        cy.visit('/about')

        // Then the <page> page is shown
        cy.pageIsShown('/about')
    });

})
