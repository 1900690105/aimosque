// =====================================
// config/multer.js - Multer configuration
const multer = require("multer");

const upload = multer({ dest: "uploads/" });

module.exports = upload;
