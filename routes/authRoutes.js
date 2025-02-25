const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController"); // Pastikan path ini benar

// Show Register Page
router.get("/register", (req, res) => {
    res.render("register"); // Render halaman register
});

// Show Login Page
router.get("/login", (req, res) => {
    res.render("login"); // Render halaman login
});

// Register and Login Routes (Pastikan `authController.register` dan `authController.login` ada)
router.post("/register", authController.register); // Route untuk register
router.post("/login", authController.login); // Route untuk login

// Logout Route
router.post("/logout", authController.logout); // Route untuk logout

module.exports = router; // Mengekspor router untuk digunakan di bagian lain dari aplikasi