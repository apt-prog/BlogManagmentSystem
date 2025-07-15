import { blogModel } from "../models/blogmodel.js";
import { userModel } from "../models/usermodel.js";

export const viewPageController = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await blogModel.findById(blogId).lean();

    if (!blog) {
      return res.status(404).render("404", { message: "Blog not found" });
    }

    const blogOwner = await userModel
      .findOne({ blogs: blog._id }, "_id name image")
      .lean();

    blog.user = blogOwner || { _id: null, name: "Unknown", image: "" };

    res.render("viewblog", { blog });
  } catch (error) {
    console.log("Error loading blog view:", error);
    res.status(500).redirect("/404");
  }
};
