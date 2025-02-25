# Manajer Tugas Mahasiswa
Aplikasi web ini membantu Anda mengelola tugas-tugas mahasiswa dengan mudah. Dibangun menggunakan Node.js, Express, MongoDB, dan EJS.

## Fitur
- **Registrasi dan Login Pengguna**: Daftar dan masuk untuk mengelola tugas Anda.
- **Autentikasi Berbasis JWT**: Keamanan terjamin dengan token JWT.
- **CRUD Tugas**: Buat, baca, perbarui, dan hapus tugas.
- **Manajemen Kategori dan Status Tugas**: Kategorisasi tugas dan atur statusnya.
- **Desain Responsif**: Tampilan yang menyesuaikan dengan berbagai perangkat.

## Penggunaan

### Registrasi

1. Buka `/auth/register`.
2. Isi formulir registrasi dan klik submit.

### Login

1. Buka `/auth/login`.
2. Isi formulir login dan klik submit.

### Manajemen Tugas

1. Setelah login, Anda akan diarahkan ke dashboard tugas.
2. Anda dapat menambahkan tugas baru, mengedit tugas yang ada, atau menghapus tugas.

## Middleware

### Middleware Autentikasi

Middleware autentikasi (`authMiddleware.js`) memeriksa token JWT di cookies dan memverifikasinya. Jika token valid, data pengguna akan ditambahkan ke objek request.

## Controllers

### Controller Autentikasi

- `register`: Menangani registrasi pengguna.
- `login`: Menangani login pengguna.
- `logout`: Menangani logout pengguna.

### Controller Tugas

- `getTasks`: Mengambil semua tugas untuk pengguna yang sedang login.
- `createTask`: Membuat tugas baru.
- `editTaskForm`: Menampilkan form edit tugas.
- `updateTask`: Memperbarui tugas yang ada.
- `deleteTask`: Menghapus tugas.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT.