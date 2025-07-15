export const logoutPageController = (req, res) => {
  res.cookie("FV-BLOGS", "");
  res.redirect("/");
};
