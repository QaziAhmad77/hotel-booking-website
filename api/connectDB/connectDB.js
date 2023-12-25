import mongoose from 'mongoose';
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connection established successfully');
  } catch (err) {
    console.log('Something went wrong while connecting to the database', err);
  }
};
mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!');
});
mongoose.connection.on('connected', () => {
  console.log('mongoDB connected!');
});

export default connectDB;
