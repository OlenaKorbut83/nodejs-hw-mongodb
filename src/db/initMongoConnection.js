import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';

export const initMongoConnection = async () => {
  try {
    const password = getEnvVar('MONGODB_PASSWORD');
    const url = getEnvVar('MONGODB_URL');
    const user = getEnvVar('MONGODB_USER');
    const baseName = getEnvVar('MONGODB_DB');
    await mongoose.connect(
      `mongodb+srv://${user}:${password}@${url}/${baseName}?retryWrites=true&w=majority&appName=Cluster0`,
    );
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
