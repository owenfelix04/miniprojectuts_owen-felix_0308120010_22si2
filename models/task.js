const mongoose = require("mongoose");

// Definisi skema untuk koleksi Task
const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Judul tugas, wajib diisi
    category: { type: String, required: true }, // Kategori tugas, wajib diisi
    deadline: { type: Date, required: true }, // Tenggat waktu tugas, wajib diisi
    status: { type: String, enum: ["pending", "progress", "done"], default: "pending" }, // Status tugas, dengan nilai default "pending"
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // ID pengguna yang memiliki tugas, wajib diisi
});

// Mengekspor model Task berdasarkan TaskSchema
module.exports = mongoose.model("Task", TaskSchema);