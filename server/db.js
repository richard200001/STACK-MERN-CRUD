/**
 * @module server
 */
import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

/**
 * Connection to the database
 * @type {function  }
 */
export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('conect to', MONGODB_URI)
  } catch (error) {
    console.error(error);
  }
};