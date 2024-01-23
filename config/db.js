const mongoose = require("mongoose");
const colors = require("colors");

// mongodb database connection

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To Database - ${mongoose.connection.host}`.bgGreen);
  } catch (error) {
    console.log(`DB error - ${error}`.bgRed);
  }
};

module.exports = connectDb;
