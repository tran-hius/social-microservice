import mongoose from 'mongoose';

export const connectDatabase = async (): Promise<void> => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://root:mongopassword@localhost:27017/social_auth_db?authSource=admin';

  try {
    mongoose.set('strictQuery', true);

    await mongoose.connect(mongoUri, {
      autoIndex: true,
    });

    console.log('[AuthService] MongoDB connected successfully to:', mongoose.connection.name);

    mongoose.connection.on('error', (err) => {
      console.error('[AuthService] MongoDB connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('[AuthService] MongoDB disconnected. Attempting reconnect...');
    });
  } catch (error) {
    console.error('[AuthService] Failed to connect to MongoDB:', error);
    process.exit(1);
  }
};

export const closeDatabase = async (): Promise<void> => {
  await mongoose.connection.close();
  console.log('[AuthService] MongoDB connection closed');
};
