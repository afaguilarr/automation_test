context('Extreme Neon Content', () => {

    it(`The Extreme Neon page content is correctly shown`, () => {
        // When a visitor requests the Extreme Neon page
        cy.visit('/extreme-neon-what-is-this-trend-about')

        // Then the Extreme Neon page is shown
        cy.pageIsShown('/extreme-neon-what-is-this-trend-about')
    });

})
