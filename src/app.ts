import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { ENV } from './configs';
import userRoute from './routers/user';
import { authen } from './middlewares/authen';
import bookRoute from './routers/book';

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
app.use('/api/user/get-info-user', authen);
app.use('/api/book', authen);
app.use('/api/author', authen);
app.use('/api', userRoute);
app.use('/api', bookRoute);

export default app;
