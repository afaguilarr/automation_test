/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const faker = require("faker");

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

    on("task", {
        generateFakeInstaNodes(args) {
            let baseData = args["baseData"]
            let numberOfInstaNodes = args["numberOfInstaNodes"]

            let baseNode = baseData["data"]["instagram"]["nodes"][0]
            baseData["data"]["instagram"]["nodes"] = []
            // Generate a random number between 1 and 10 if no number was provided
            if (!numberOfInstaNodes) {
                numberOfInstaNodes = Math.floor((Math.random() * 10) + 1)
            }
            for (let i = 0; i < numberOfInstaNodes; i++) {
                let node = {}
                node["caption"] = faker.lorem.words()
                // Some random string we know will have the proper format
                node["id"] = (Math.random() + 1).toString(36).substring(7);
                // Generate a random number between 0 and 1000
                node["likes"] = Math.floor(Math.random() * 1000)
                // getTime() is necessary to fake the date in UTC milliseconds, / 1000 to make it seconds
                node["timestamp"] = faker.datatype.datetime().getTime() / 1000
                node["localFile"] = baseNode["localFile"]
                baseData["data"]["instagram"]["nodes"].push(node)
            }
            return baseData
        }
    });
}
