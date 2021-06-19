context('HomePage Content', () => {

    it(`The Black & White page content is correctly shown`, () => {
        // a visitor requests the Projects page
        cy.visit('/black-white-superb-art')

        // Then the Black & White page is shown
        cy.pageIsShown('/black-white-superb-art')
    });

})
