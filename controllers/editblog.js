import { blogModel } from "../models/blogmodel.js";

export const editBlogPageController = async (req, res) => {
  try {
    let blogId = req.params.id;
    let { category, image, heading, mainbody, content } = req.body;

    const updatedBlog = await blogModel.findOneAndUpdate(
      { _id: blogId },
      { category, image, heading, mainbody, content },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).redirect("/404");
    }

    res.redirect("/dashboard");
  } catch (err) {
    console.log(`Some Error In The Edit Page ❌ ${err}`);
    res.status(400).redirect("/404");
  }
};
