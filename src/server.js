import express from 'express';
import cors from 'cors';
import { getEnvVar } from './utils/getEnvVar.js';
// import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFoundHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import { contactsRouter } from './routers/contacts.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // app.use(logger);

  app.use('/contacts', contactsRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  const port = Number(getEnvVar('PORT', 3000));
  app.listen(port, () => console.log(`Server running on port ${port}`));
};
