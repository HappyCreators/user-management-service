import app from './app.js';
import connectDB from './config/db.js';
import { config } from './config/env.js';
import logger from './utils/logger.js';

const startServer = async () => {
  try {
    await connectDB();
    app.listen(config.port, () => {
      logger.info(`Server running on port ${config.port}`);
    });
  } catch (err) {
    logger.error('Failed to start server', err);
    process.exit(1);
  }
};

startServer();
