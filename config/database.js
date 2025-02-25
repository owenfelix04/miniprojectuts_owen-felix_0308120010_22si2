const mongoose = require("mongoose");

// Menghubungkan ke database MongoDB yang berjalan di localhost pada port 27017
mongoose.connect("mongodb://127.0.0.1:27017/student_task_manager", {
    useNewUrlParser: true, // Menggunakan parser URL baru
    useUnifiedTopology: true, // Menggunakan engine monitoring koneksi baru
});

// Mendapatkan instance koneksi database
const db = mongoose.connection;

// Menangani event error pada koneksi database
db.on("error", console.error.bind(console, "Database connection failed!"));

// Menangani event open yang menandakan koneksi berhasil
db.once("open", () => console.log("Connected to MongoDB successfully!"));

// Mengekspor instance koneksi database untuk digunakan di file lain
module.exports = db;