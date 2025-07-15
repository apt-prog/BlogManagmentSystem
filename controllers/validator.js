import jwt from "jsonwebtoken";

export const ValidatorToken = async (req, res, next) => {
  let token = req.cookies["FV-BLOGS"];
  if (!token) return res.status(400).redirect("/404");

  jwt.verify(token, process.env.Secretkey, (err, user) => {
    if (err) {
      return res.status(401).redirect("/404");
    }
    req.user = user;
    next();
  });
};
