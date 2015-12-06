FROM node:5.1.1-wheezy
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app
RUN npm install kerberos
RUN npm install -g bower grunt
RUN npm install
RUN bower install --config.interactive=false --allow-root

EXPOSE 3000
CMD [ "npm", "start" ]