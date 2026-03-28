import mongoose from "mongoose";

const MONGODB_URI = "mongodb://localhost:27017/explore-tirupati";

export async function connectDB() {
  if (mongoose.connection.readyState === 1) return;

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
  }
}