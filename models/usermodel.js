import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  image: { type: String },
  email: { type: String, unique: true, trim: true },
  password: { type: String },
  blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "blogs" }],
});

export const userModel = mongoose.model("users", userSchema);
