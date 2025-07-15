import mongoose from "mongoose";

const formDataSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  subject: {
    type: String,
    required: true,
    enum: ["general", "support", "business", "feedback", "other"],
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 500,
  },
  newsletter: {
    type: Boolean,
    default: false,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export const formDataModel = mongoose.model("formdata", formDataSchema);
