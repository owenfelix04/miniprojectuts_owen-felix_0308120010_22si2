const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const authMiddleware = require("../middleware/authMiddleware");

// Show Dashboard (Home Page)
router.get("/", authMiddleware, taskController.getTasks); // Route untuk menampilkan semua tugas, dilindungi oleh middleware autentikasi

// Create Task
router.post("/", authMiddleware, taskController.createTask); // Route untuk membuat tugas baru, dilindungi oleh middleware autentikasi

// Show Edit Task Form
router.get("/edit/:id", authMiddleware, taskController.editTaskForm); // Route untuk menampilkan form edit tugas, dilindungi oleh middleware autentikasi

// Update Task
router.post("/update/:id", authMiddleware, taskController.updateTask); // Route untuk memperbarui tugas, dilindungi oleh middleware autentikasi

// Delete Task
router.post("/delete/:id", authMiddleware, taskController.deleteTask); // Route untuk menghapus tugas, dilindungi oleh middleware autentikasi

module.exports = router; // Mengekspor router untuk digunakan di bagian lain dari aplikasi