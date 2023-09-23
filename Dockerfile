FROM node:16.14

WORKDIR /usr/src/app

COPY package*.json ./

# Install production dependencies.
RUN npm ci --omit=dev

# Copy local code to the container image.
COPY . ./

RUN npm uninstall puppeteer

RUN npm i puppeteer

CMD [ "node", "index.js" ]
