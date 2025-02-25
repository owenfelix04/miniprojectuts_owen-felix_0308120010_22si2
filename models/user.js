const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // Nama pengguna, wajib diisi dan harus unik
    password: { type: String, required: true }, // Kata sandi, wajib diisi
});

// Hash password before saving
UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next(); // Jika password tidak dimodifikasi, lanjutkan
    const salt = await bcrypt.genSalt(10); // Buat salt untuk hashing
    this.password = await bcrypt.hash(this.password, salt); // Hash password dengan salt
    next(); // Lanjutkan proses penyimpanan
});

module.exports = mongoose.model("User", UserSchema); // Mengekspor model User berdasarkan UserSchema