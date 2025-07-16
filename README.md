# 📝 BlogManagementSystem

![Blog Icon](https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-blog-seo-and-marketing-flatart-icons-outline-flatarticons.png)

A fully-featured, responsive, full-stack blogging platform with secure authentication, dynamic blog handling, admin controls, and server-side rendering—built with the **MERN stack**.

---

## 🚀 Live Deployment

- 🌐 **Live Site:** [https://blogmanagment-fv.onrender.com](https://blogmanagment-fv.onrender.com)
- 💻 **GitHub Repo:** [https://github.com/apt-prog/BlogManagmentSystem](https://github.com/apt-prog/BlogManagmentSystem)

---

## 📖 Brief Introduction

**BlogManagementSystem** is a modern, SEO-optimized blogging platform that empowers users to create, interact with, and manage blog posts seamlessly. It features secure authentication, real-time comments/likes, an admin dashboard, and server-side rendering with EJS for fast and search-engine-friendly pages. Built using the MERN stack, it offers both creators and readers a rich, intuitive experience, complete with user roles, image uploads, and full content moderation.

---

## 🛠️ Installation & Local Development

```bash
# Clone the repository
git clone https://github.com/apt-prog/BlogManagmentSystem.git

# Move into the project directory
cd BlogManagmentSystem

# Install backend dependencies
npm install

# Navigate to the client directory and install frontend dependencies
cd client
npm install

# Go back to root and start the development server
cd ..
npm run dev
```

---

## ✨ Features

- 🔒 **JWT & Session-based User Authentication**
- 📝 **Rich Blog Creation with Images**
- 💬 **Real-time Comment and Like System**
- 📊 **User Dashboard with Analytics**
- 🧑‍💼 **Admin Controls for Blog/User Management**
- 🌓 **Light/Dark Theme Toggle**
- ⚡ **Server-Side Rendering with EJS**
- 🌍 **SEO-Friendly URLs**
- 📂 **File Upload Handling via Multer**
- 🔄 **Dynamic Page Rendering**
- ❌ **Custom 404 Error Page**
- 🧹 **Clean MVC Structure**

---

## 📁 Project Structure

```
BlogManagementSystem/
│
├── client/         # Frontend assets (HTML, CSS, JS)
├── controllers/    # Controller logic (users, blogs, auth)
├── models/         # Mongoose schemas (Blog, User)
├── routes/         # Express routes (auth, blog, admin)
├── views/          # EJS templates (SSR)
├── public/         # Static files & uploaded images
├── middlewares/    # Auth, error handling
├── server.js       # Main Express app
└── .env            # Environment config (Mongo URI, secret keys)
```

---

## 📚 Detailed Overview

BlogManagementSystem delivers a seamless experience for both readers and content creators:

- **Authentication:** Secure JWT/session handling for user login, registration, and protected routes.
- **Blog Management:** Create, edit, delete, and preview blogs with rich-text content and image uploads.
- **Interactions:** Like, comment, and view-count features for engaging blog content.
- **Admin Panel:** Full moderation tools for managing users, blogs, and comments.
- **Image Handling:** Upload and live-preview images before publishing.
- **UI/UX:** Responsive design with Light/Dark mode, custom error pages, and SEO optimization.
- **Performance:** Fast load times powered by SSR and efficient MongoDB queries.

---

## 🧑‍💻 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is licensed under the MIT License.

---

> **Made with ❤️ by [apt-prog](https://github.com/apt-prog)**
