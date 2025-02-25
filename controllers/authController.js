const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register User
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) return res.status(400).json({ message: "Username already exists" }); // Jika username sudah ada, kembalikan status 400

        const user = new User({ username, password });
        await user.save();
        res.status(201).redirect("/auth/login"); // Redirect ke halaman login setelah berhasil mendaftar
    } catch (error) {
        res.status(500).json({ error: error.message }); // Tangani error dengan mengembalikan status 500
    }
};

// Login User
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ message: "Invalid credentials" }); // Jika username tidak ditemukan, kembalikan status 400

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" }); // Jika password tidak cocok, kembalikan status 400

        const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" }); // Buat token JWT

        res.cookie("token", token, { httpOnly: true, maxAge: 3600000 }); // Simpan token di cookie
        res.redirect("/tasks"); // Redirect ke halaman tugas setelah berhasil login
    } catch (error) {
        res.status(500).json({ error: error.message }); // Tangani error dengan mengembalikan status 500
    }
};

// Logout User
exports.logout = (req, res) => {
    res.clearCookie("token"); // Hapus cookie token
    res.redirect("/auth/login"); // Redirect ke halaman login
};