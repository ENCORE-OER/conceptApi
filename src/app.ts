import express from 'express';
import bodyParser from "body-parser";
import router from "./routes";
import cors from "cors";
import { ENV } from "./utils/secrets";

/*
    STRUCTURE
    │   app.js          # App entry point
    └───routes          # Our routes controllers for all the endpoints of the app
    └───controllers     # Functions for our APIs
    └───models          # Database models
    └───core            # Contains all the code related to the generation of concept maps
    └───utils           # Common functions that would be used repetitively
*/

const app = express();

if (ENV === 'production') {
  app.set('trust proxy', 1) // trust first proxy
}

app.use(cors({
  origin: (origin, callback) => {
    // automatically set cors origin header based on client request for faster developing
    // TODO: check domain cors in production env
    return callback(null, true);
  },
}));

app.use(bodyParser.json({limit: "1mb"}));

app.use(router);

export default app;