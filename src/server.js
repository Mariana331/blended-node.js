import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { getEnvVar } from './utils/getEnvVar.js';
import productsRouters from './/routers/contacts.js';
import authRouters from './routers/auth.js';
import cookieParser from 'cookie-parser';

const PORT = Number(getEnvVar('PORT', '9090'));

export const setupServer = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );
  app.use(authRouters);
  app.use(productsRouters);
  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
