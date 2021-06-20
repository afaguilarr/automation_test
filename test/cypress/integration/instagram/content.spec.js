context('Projects Content', () => {

    it(`The Projects page content is correctly shown`, () => {
        // When a visitor requests the Projects page
        cy.visit('/projects')

        // Then the Projects page is shown
        cy.pageIsShown('/projects')
    });

})
