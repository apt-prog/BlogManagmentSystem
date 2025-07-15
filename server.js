import express from "express";
import dotenv from "dotenv";
import { indexPageController } from "./controllers/index.js";
import { coonectWithDB } from "./config/db.js";
import { aboutPageController } from "./controllers/about.js";
import { contactPageController } from "./controllers/contact.js";
import { errorPageControoler } from "./controllers/404.js";
import { createUserPageController } from "./controllers/createuser.js";
import { loginPageController } from "./controllers/login.js";
import { dashboardPageController } from "./controllers/dashboard.js";
import cookieParser from "cookie-parser";
import { ValidatorToken } from "./controllers/validator.js";
import { logoutPageController } from "./controllers/logout.js";
import { createBlogPageController } from "./controllers/createblog.js";
import { formSubmit } from "./controllers/formsubmit.js";
import { addNewBlogpageCntroller } from "./controllers/addnewblog.js";
import { allBlogsPageController } from "./controllers/allblogs.js";
import { aboutUsPageCOntroller } from "./controllers/aboutus.js";
import { contactUsPageController } from "./controllers/contactus.js";
import { deleteBlogPageController } from "./controllers/delete.js";
import { viewPageController } from "./controllers/view.js";
import { editPageController } from "./controllers/edit.js";
import { editBlogPageController } from "./controllers/editblog.js";
import { likePageController } from "./controllers/like.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
dotenv.config();

coonectWithDB();

app.get("/", indexPageController);
app.get("/about", aboutPageController);
app.get("/aboutus", aboutUsPageCOntroller);
app.get("/contact", contactPageController);
app.get("/contactus", contactUsPageController);
app.get("/404", errorPageControoler);
app.get("/dashboard", ValidatorToken, dashboardPageController);
app.get("/logout", ValidatorToken, logoutPageController);
app.get("/create-blog", ValidatorToken, createBlogPageController);
app.get("/allblogs", ValidatorToken, allBlogsPageController);
app.post("/create", createUserPageController);
app.post("/login", loginPageController);
app.post("/addnewblog", ValidatorToken, addNewBlogpageCntroller);
app.post("/formsubmit", formSubmit);
app.get("/blog/:id", ValidatorToken, viewPageController);
app.get("/edit/:id", ValidatorToken, editPageController);
app.post("/editblog/:id", ValidatorToken, editBlogPageController);
app.get("/delete/:id", ValidatorToken, deleteBlogPageController);
app.get("/like/:blogid/:userid", likePageController);

app.listen(PORT, () => {
  console.log(`Server Runs Perfectly On PORT = ${PORT} ✅`);
});

// ❌✅
