import { blogModel } from "../models/blogmodel.js";
import { userModel } from "../models/usermodel.js";

export const createBlogPageController = async (req, res) => {
  try {
    const email = req.user.email;
    const userFind = await userModel.findOne({ email });
    if (!userFind) {
      return res.status(404).render("404", { message: "User not found" });
    }

    const userBlogs = await Promise.all(
      userFind.blogs.map(async (blogId) => {
        return await blogModel.findById(blogId);
      })
    );

    res.render("create-blog", { user: userFind, userBlogs });
  } catch (error) {
    console.log("Error loading create-blog's:", error);
    res.status(500).redirect("/404", { message: "Internal Server Error" });
  }
};
