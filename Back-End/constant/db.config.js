const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const url = process.env.MONGO_URL;
    if (!url) throw new Error("MONGO_URL is not defined");

    await mongoose.connect(url);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
