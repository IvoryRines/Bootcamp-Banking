FROM node:20.12.1

WORKDIR /app


COPY package*.json ./


RUN  npm install

COPY . /app


ENV port = 3001

EXPOSE 3001

CMD [ "node", "server.js" ]
