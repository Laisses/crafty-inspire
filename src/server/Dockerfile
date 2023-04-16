FROM node

WORKDIR /src/usr/

COPY . .

EXPOSE 5000

RUN npm ci
RUN npm run build

CMD ["npm", "start"]