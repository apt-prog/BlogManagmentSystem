import mongoose from "mongoose";

export const coonectWithDB = () => {
  try {
    mongoose.connect(process.env.MongoDB_Key);
    console.log(`Data Base Connected SuccessFully ✅`);
  } catch (err) {
    console.log(`In The DB Connection Have Some Problem ❌ ${err}`);
  }
};
