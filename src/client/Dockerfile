FROM node

WORKDIR /tmp/react

COPY . .

RUN npm ci

RUN chmod a+x /tmp/react/node_modules/.bin/react-scripts

RUN npm run build

RUN mkdir -p /var/www/html

WORKDIR /tmp/react/build

CMD ["cp", "-R", ".", "/var/www/html"]
