context('Instagram Grid', () => {

    it(`The Instagram grid shows the requested instagram info`, () => {

        // Given that there are some random instagram posts
        cy.fixture('mockInstaNodes.json').then((mockInstaNodes) => {
            cy.task("generateFakeInstaNodes", { baseData: mockInstaNodes })
                .then((instaNodes) => {
                    cy.wrap(instaNodes).as('instaNodes')
                })
        })

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
        cy.fixture('mockInstaNodes.json').then((mockInstaNodes) => {
            cy.task("generateFakeInstaNodes", { baseData: mockInstaNodes, numberOfInstaNodes: 1 })
                .then((instaNodes) => {
                    cy.wrap(instaNodes).as('instaNodes')
                })
        })

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
        cy.fixture('mockInstaNodes.json').then((mockInstaNodes) => {
            cy.task("generateFakeInstaNodes", { baseData: mockInstaNodes, numberOfInstaNodes: 1 })
                .then((instaNodes) => {
                    cy.wrap(instaNodes).as('instaNodes')
                })
        })

        cy.get("@instaNodes").then((instaNodes) => {
            // Intercept request to get instaNodes data
            cy.intercept("GET", "/page-data/sq/d/883553132.json", instaNodes)

            // When a visitor requests the Instagram page
            cy.visit('/instagram')

            // Then the instagram grid element contains the expected info
            // And the expected elements are hidden
            const caption = instaNodes["data"]["instagram"]["nodes"][0]["caption"]
            const likes = instaNodes["data"]["instagram"]["nodes"][0]["likes"]
            let timestamp = instaNodes["data"]["instagram"]["nodes"][0]["timestamp"]
            cy.get('.instagram-title')
                .should('contain', caption)
                .should('be.hidden')
            cy.get('.instagram-heart')
                .should('contain', likes)
                .should('be.hidden')
            // Got this calculation from the development code, the commented code below is what
            // I think should be the actual calculation though
            timestamp = new Date(timestamp * 1000).toLocaleDateString(`de-DE`)
            //timestamp = new Date(timestamp).toLocaleDateString(`de-DE`)
            cy.get('.instagram-bottom > :nth-child(2)')
                .should('contain', timestamp)
                .should('be.hidden')
        })
    })

    it(`Hovering over each Instagram grid element shows the expected info`, () => {

        // Given that there is 1 instagram post
        cy.fixture('mockInstaNodes.json').then((mockInstaNodes) => {
            cy.task("generateFakeInstaNodes", { baseData: mockInstaNodes, numberOfInstaNodes: 1 })
                .then((instaNodes) => {
                    cy.wrap(instaNodes).as('instaNodes')
                })
        })

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
