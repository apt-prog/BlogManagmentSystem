import { formDataModel } from "../models/formdatamodel.js";

export const formSubmit = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, subject, message, newsletter } =
      req.body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    if (message.length > 500) {
      return res.status(400).json({
        success: false,
        message: "Message must be 500 characters or less",
      });
    }

    const formData = new formDataModel({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : "",
      subject,
      message: message.trim(),
      newsletter: newsletter === "on" || newsletter === true,
    });

    await formData.save();

    res.status(201).json({
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
      data: {
        id: formData._id,
        submittedAt: formData.submittedAt,
      },
    });
  } catch (error) {
    console.error("Form submission error:", error);
    res.status(500).json({
      success: false,
      message:
        "Sorry, there was an error processing your request. Please try again.",
    });
  }
};
