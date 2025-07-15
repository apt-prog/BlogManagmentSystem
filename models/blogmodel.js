import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  category: { type: String },
  heading: { type: String, trim: true },
  content: { type: String, trim: true },
  mainbody: { type: String, trim: true },
  image: { type: String },
  date: { type: String },
  like: [{ type: mongoose.Schema.Types.ObjectId, ref: "users" }],
});

export const blogModel = mongoose.model("blogs", blogSchema);
