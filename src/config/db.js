import mongoose from 'mongoose';
import { config } from './env.js';
import logger from '../utils/logger.js';

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI);
    logger.info('MongoDB connected');
  } catch (err) {
    logger.error('MongoDB connection failed', err);
    process.exit(1);
  }
};

export default connectDB;
