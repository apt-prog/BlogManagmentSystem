import { blogModel } from "../models/blogmodel.js";
import { userModel } from "../models/usermodel.js";

export const addNewBlogpageCntroller = async (req, res) => {
  try {
    let email = req.user.email;
    let userFind = await userModel.findOne({ email });
    if (!userFind) {
      return res.status(401).redirect("/404");
    }

    let { category, image, heading, mainbody, content } = req.body;

    // Create date in "15 Jul" format
    let today = new Date();
    let day = today.getDate();
    let month = today.toLocaleString("default", { month: "short" });
    let formattedDate = `${day} ${month}`; // Example: "15 Jul"

    let createdBlog = await blogModel.create({
      category,
      heading,
      content,
      mainbody,
      image,
      date: formattedDate
    });

    userFind.blogs.push(createdBlog._id);
    await userFind.save();

    res.status(201).redirect("/dashboard");
  } catch (err) {
    console.log(`Some Error In The Create Blog Page ❌ ${err}`);
    res.status(400).render("404");
  }
};
