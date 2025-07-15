import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../models/usermodel.js";

export const loginPageController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFind = await userModel.findOne({ email });

    if (!userFind) {
      return res.status(400).render("404");
    }

    const isPasswordCorrect = await bcrypt.compare(password, userFind.password);

    if (!isPasswordCorrect) {
      return res.status(400).render("404");
    }

    const token = jwt.sign({ email: userFind.email }, process.env.Secretkey, {
      expiresIn: "2h",
    });


    return res
      .status(200)
      .cookie("FV-BLOGS", token, {
        httpOnly: true,
        maxAge: 2 * 60 * 60 * 1000, 
      })
      .redirect("/dashboard");
  } catch (error) {
    console.log("❌ Login Error:", error);
    return res.status(500).render("404");
  }
};
