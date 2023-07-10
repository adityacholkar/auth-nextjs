import mongoose from 'mongoose';

export const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const db = mongoose.connection;

    db.on('connected', () => {
      console.log('Database connected!');
    });

    db.on('error', (error) => {
      console.log('Database connection error:', error);
      process.exit();
    });
  } catch (error) {
    console.log(error);
  }
};
