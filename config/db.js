import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

export const coonectWithDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_Key, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Data Base Connected SuccessFully ✅`);
  } catch (err) {
    console.log(`In The DB Connection Have Some Problem ❌ ${err}`);
  }
};
