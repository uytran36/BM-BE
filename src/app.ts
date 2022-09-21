import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { ENV } from './configs';
import userRoute from './routers/user';

const app = express();

mongoose
  .connect(`mongodb://${ENV.MONGODB}`)
  .then(() => {
    process.stdout.write('connected to MongoDB\n');
  })
  .catch((error) => {
    process.stdout.write('Unable to connect to MongoDB!');
    process.stdout.write(error.toString());
  });

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(express.json({ inflate: false }));
app.use(cors(corsOptions));
app.use('/api', userRoute);

export default app;
