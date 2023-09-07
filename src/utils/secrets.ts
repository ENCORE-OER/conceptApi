import dotenv from "dotenv";

dotenv.config();

// Env definition
export const ENV = (process.env.DOMAIN_APP_DEPLOY ? "production" : (process.env.NODE_ENV || "development"));

export const PORT = process.env.PORT ? +process.env.PORT : 5000;

export const DOMAIN_APP_DEPLOY = process.env.DOMAIN_APP_DEPLOY || ("localhost:" + PORT)

export const CORS_ORIGINS = process.env.CORS_ORIGINS ? process.env.CORS_ORIGINS.split(',') : "*";
