context('Instagram Grid', () => {

    it(`The Instagram grid shows the requested instagram info`, () => {
        // Given that there are some random instagram posts
        cy.setInstaNodes(undefined)

        cy.get("@instaNodes").then((instaNodes) => {
            // Intercept request to get instaNodes data
            cy.intercept("GET", "/page-data/sq/d/883553132.json", instaNodes)

            // When a visitor requests the Instagram page
            cy.visit('/instagram')

            // Then the expected instagram elements are shown
            const expectedLength = instaNodes["data"]["instagram"]["nodes"].length
            cy.get('.instagram-link-styles').should('have.length', expectedLength)
        })
    })

    it(`The Instagram grid elements redirect to the external instagram post`, () => {
        // Given that there is 1 instagram post
        cy.setInstaNodes(1)

        cy.get("@instaNodes").then((instaNodes) => {
            // Intercept request to get instaNodes data
            cy.intercept("GET", "/page-data/sq/d/883553132.json", instaNodes)

            // And the Instagram page is shown
            cy.visit('/instagram')

            // When a visitor clicks on an Instagram grid element
            cy.get('.instagram-link-styles').click()

            // Then the external instagram post is shown
            const id = instaNodes["data"]["instagram"]["nodes"][0]["id"]
            const expectedUrl = `https://www.instagram.com/p/${id}/`
            cy.pageIsShown(expectedUrl)
        })
    })

    it(`Each Instagram grid element contains the expected info`, () => {
        // Given that there is 1 instagram post
        cy.setInstaNodes(1)

        cy.get("@instaNodes").then((instaNodes) => {
            // Intercept request to get instaNodes data
            cy.intercept("GET", "/page-data/sq/d/883553132.json", instaNodes)

            // When a visitor requests the Instagram page
            cy.visit('/instagram')

            // Then the instagram grid element contains the expected info
            // And the expected elements are hidden
            const instaNodeObject = instaNodes["data"]["instagram"]["nodes"][0]
            const caption = instaNodeObject["caption"]
            const likes = instaNodeObject["likes"]
            // Got this calculation from the development code
            const timestamp = new Date(instaNodeObject["timestamp"] * 1000).toLocaleDateString(`de-DE`)
            cy.get('.instagram-title')
                .should('contain', caption)
                .should('be.hidden')
            cy.get('.instagram-heart')
                .should('contain', likes)
                .should('be.hidden')
            cy.get('.instagram-bottom > :nth-child(2)')
                .should('contain', timestamp)
                .should('be.hidden')
        })
    })

    it(`Hovering over each Instagram grid element shows the expected info`, () => {
        // Given that there is 1 instagram post
        cy.setInstaNodes(1)

        cy.get("@instaNodes").then((instaNodes) => {
            // Intercept request to get instaNodes data
            cy.intercept("GET", "/page-data/sq/d/883553132.json", instaNodes)

            // And the Instagram page is shown
            cy.visit('/instagram')

            // When the visitor hovers over the Instagram grid element
            cy.get('.instagram-link-styles').focus()

            // Then the expected elements are not hidden anymore
            cy.get('.instagram-title').should('not.be.hidden')
            cy.get('.instagram-heart').should('not.be.hidden')
            cy.get('.instagram-bottom > :nth-child(2)').should('not.be.hidden')
        })
    })

})
