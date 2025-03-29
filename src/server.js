import express from 'express';
import cors from 'cors';
import PinoHttp from 'pino-http';
import { getEnvVar } from './utils/getEnvVar.js';
import { getContacts, getContactById } from './services/contacts.js';

export const setupServer = () => {
  const app = express();

  app.use(cors());
  const logger = PinoHttp({
    transport: {
      target: 'pino-pretty',
    },
  });
  app.use(logger);

  app.get('/contacts', async (req, res) => {
    const data = await getContacts();

    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data,
    });
  });

  app.get('/contacts/:id', async (req, res) => {
    const { id } = req.params;

    const data = await getContactById(id);

    if (!data) {
      return res.status(404).json({
        message: 'Contact not found',
      });
    }

    res.json({
      status: 200,
      message: `Successfully found contact with id ${id}!`,
      data,
    });
  });

  app.use((req, res) => {
    res.status(404).json({ message: 'Not found' });
  });

  const port = Number(getEnvVar('PORT', 3000));
  app.listen(port, () => console.log(`Server running on port ${port}`));
};
