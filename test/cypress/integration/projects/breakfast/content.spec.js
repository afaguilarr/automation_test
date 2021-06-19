context('Breakfast Content', () => {

    it(`The Breakfast page content is correctly shown`, () => {
        // When a visitor requests the Breakfast page
        cy.visit('/breakfast')

        // Then the Breakfast page is shown
        cy.pageIsShown('/breakfast')
    });

})
