import { blogModel } from "../models/blogmodel.js";

export const likePageController = async (req, res) => {
  try {
    let blogId = req.params.blogid;
    let userId = req.params.userid;
    let findBlog = await blogModel.findOne({ _id: blogId });

    if (!findBlog) {
      return res.status(404).redirect("/404");
    }

    let indexFound = findBlog.like.indexOf(userId);

    if (indexFound === -1) {
      findBlog.like.push(userId);
    } else {
      findBlog.like.splice(indexFound, 1);
    }
    await findBlog.save();

    res.redirect(req.get("referer") || "/allblogs");
  } catch (err) {
    console.log(`Some Error In The Like Function ❌ ${err}`);
    res.status(400).redirect("/dashboard");
  }
};
