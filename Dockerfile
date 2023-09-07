FROM node:17.8

WORKDIR /backend

RUN apt-get update && \
    apt-get install sqlite3 curl -y

ADD . .

RUN npm install

CMD "npm run encore:downloadMat && npm run encore:dbInit && npm run start"