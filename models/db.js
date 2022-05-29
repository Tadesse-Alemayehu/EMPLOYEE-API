require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = async () => {
  console.log("trying to connect to : ", process.env.MANGO_URI)
  try {
    await
      mongoose.connect(process.env.MANGO_URI, {})
  } catch (error) {
    console.log(`fail`);
  }
}

module.exports = connectDB;
