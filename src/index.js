import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

export const bootstrap = async () => {
  await initMongoConnection();
  setupServer();
};

bootstrap();
