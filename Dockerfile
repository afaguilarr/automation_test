FROM node:latest
WORKDIR /app

# dependencies will be installed only if the package files change
COPY package.json .

RUN yarn install
