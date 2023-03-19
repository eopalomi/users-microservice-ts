FROM node:18-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install pm2 -g

RUN npm install

COPY --chown=node:node . .

EXPOSE 5151

CMD ["npm","start"]

