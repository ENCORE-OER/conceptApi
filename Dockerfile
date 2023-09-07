FROM node:17.8

WORKDIR /backend

RUN apt-get update && \
    apt-get install sqlite3 curl -y

ADD . .

RUN npm install

RUN npm run encore:downloadMat

RUN npm run encore:dbInit

CMD [ "npm", "run", "start" ]