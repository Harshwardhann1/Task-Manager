const mongoose = require('mongoose');
const connectionString =
  'mongodb+srv://harsh:harsh@cluster0.y2vlrpy.mongodb.net/TaskManager';

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
