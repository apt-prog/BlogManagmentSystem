import { blogModel } from "../models/blogmodel.js";
import { userModel } from "../models/usermodel.js";

export const deleteBlogPageController = async (req, res) => {
  try {
    const email = req.user.email;
    let userFind = await userModel.findOne({ email });
    let blogId = req.params.id;
    await blogModel.findByIdAndDelete({ _id: blogId });

    let findBlog = userFind.blogs.indexOf(blogId);
    userFind.blogs.splice(findBlog, 1);
    await userFind.save();

    res.redirect("/dashboard");
  } catch (err) {
    console.log(`Some Error In The Delete Page ❌ ${err}`);
    res.status(400).redirect("/404");
  }
};
