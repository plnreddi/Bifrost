FROM node:5.1.1-wheezy
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app
RUN npm install kerberos
RUN npm install -g bower grunt grunt-cli
RUN npm install
RUN bower install --config.interactive=false --allow-root
RUN grunt build

EXPOSE 3000
CMD [ "node", "dist/server/server.js" ]
