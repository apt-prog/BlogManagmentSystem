import { userModel } from "../models/usermodel.js";
import bcrypt from "bcrypt";

export const createUserPageController = async (req, res) => {
  try {
    let { name, email, password, image } = req.body;

    let salt = await bcrypt.genSalt(10);
    let hash = await bcrypt.hash(password, salt);

    let userCreate = await userModel.create({
      name,
      email,
      password: hash,
      image,
    });

    console.log(userCreate);
    return res.status(201).redirect("/");
  } catch (err) {
    console.log(`Some Error In The Create Page ❌ ${err}`);
    res.status(400).redirect("/404");
  }
};
