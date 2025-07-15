import { blogModel } from "../models/blogmodel.js";
import { userModel } from "../models/usermodel.js";

export const allBlogsPageController = async (req, res) => {
  try {
    const email = req.user.email;
    const userFind = await userModel.findOne({ email });
    if (!userFind) {
      return res.status(404).render("404", { message: "User not found" });
    }

    const allBlogs = await blogModel
      .find({})
      .populate({
        path: "like",
        select: "_id name image",
        model: "users",
      })
      .lean();

    for (let blog of allBlogs) {
      const blogOwner = await userModel
        .findOne({ blogs: blog._id }, "name image")
        .lean();
      blog.user = blogOwner || { name: "Unknown", image: "" };
    }

    res.render("allblogs", { user: userFind, userBlogs: allBlogs });
  } catch (error) {
    console.log("Error loading all blogs:", error);
    res.status(500).render("404", { message: "Internal Server Error" });
  }
};
