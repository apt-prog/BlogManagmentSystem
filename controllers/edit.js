import { blogModel } from "../models/blogmodel.js";

export const editPageController = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await blogModel.findById(blogId).lean();
    if (!blog) {
      return res.status(404).render("404", { message: "Blog not found" });
    }
    res.render("edit", { blog });
  } catch (error) {
    console.log("Error loading edit page:", error);
    res.status(500).redirect("/404");
  }
};
