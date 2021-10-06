FROM node:16-alpine3.11

WORKDIR /code

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD npm starta