FROM cypress/browsers:node14.16.0-chrome89-ff86
WORKDIR /app

# dependencies will be installed only if the package files change
COPY package.json .

RUN yarn install

# verify that Cypress has been installed correctly.
# running this command separately from "cypress run" will also cache its result
# to avoid verifying again when running the tests
RUN npx cypress verify
