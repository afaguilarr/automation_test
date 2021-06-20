context('Instagram Content', () => {

    it(`The Instagram page content is correctly shown`, () => {
        // When a visitor requests the Instagram page
        cy.visit('/instagram')

        // Then the Instagram page is shown
        cy.pageIsShown('/instagram')
    });

})
