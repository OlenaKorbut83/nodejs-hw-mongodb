import { initMongoConnection } from './db/initMongoConnection.js';

import { setupServer } from './server.js';

const bootstramp = async () => {
  await initMongoConnection();

  setupServer();
};
bootstramp();
