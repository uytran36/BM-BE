import 'dotenv/config';

export const ENV = {
  PORT: process.env.PORT || '5000',
  MONGODB: process.env.MONGO || 'localhost:27017/BM',
  PEPPER: process.env.PEPPER || '$2a$10$8zbARqdJOG5Z8ZbIZht7QO',
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'UyTKG',
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'UyTKG_REFRESH',
};
