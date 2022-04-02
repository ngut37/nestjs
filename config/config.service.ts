import * as dotenv from 'dotenv';

dotenv.config();

export const config = Object.freeze({
  PG_PW: process.env.PG_PW,
  JWT_SECRET: process.env.JWT_SECRET,
});
