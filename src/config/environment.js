import "dotenv/config";

export const environments = {
  APP_PORT: process.env.APP_PORT,
  APP_URL: process.env.APP_URL,
  DB: {
    DB_URL: process.env.DB_URL,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
  },
  SECRET: process.env.SECRET
};