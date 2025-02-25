require("dotenv").config(); // Mengimpor dan mengkonfigurasi dotenv untuk menggunakan variabel lingkungan dari file .env
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const db = require("./config/database");
const jwt = require("jsonwebtoken");

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // Middleware untuk mengurai body dari request dengan URL-encoded payload
app.use(cookieParser()); // Middleware untuk mengurai cookies dari request

// Set EJS as View Engine
app.set("view engine", "ejs"); // Mengatur EJS sebagai view engine

// Set User in Views (Check token in cookies)
app.use((req, res, next) => {
    const token = req.cookies.token; // Mengambil token dari cookies
    if (token) {
        try {
            req.user = jwt.verify(token, process.env.JWT_SECRET); // Verifikasi token menggunakan secret key
            res.locals.user = req.user; // Menyimpan data pengguna yang ter-decode ke res.locals
        } catch (error) {
            req.user = null;
            res.locals.user = null;
        }
    } else {
        req.user = null;
        res.locals.user = null;
    }
    next(); // Lanjutkan ke middleware atau route berikutnya
});

// Routes
app.use("/auth", authRoutes); // Menggunakan route untuk autentikasi
app.use("/tasks", taskRoutes); // Menggunakan route untuk tugas

// Home Redirect
app.get("/", (req, res) => res.redirect("/tasks")); // Redirect ke halaman tugas sebagai halaman utama

app.listen(3000, () => console.log("Server running on http://localhost:3000")); // Menjalankan server pada port 3000