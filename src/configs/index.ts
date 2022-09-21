import 'dotenv/config';

export const ENV = {
  PORT: process.env.PORT || '5000',
  MONGODB: process.env.MONGO || 'localhost:27017/BM',
  PEPPER: process.env.PEPPER || '$2a$10$8zbARqdJOG5Z8ZbIZht7QO',
};
