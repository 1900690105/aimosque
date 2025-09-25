// =====================================
// routes/admin.js - Admin related routes
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Registration } = require("../models");
const { getAdminById } = require("../controllers/adminController");

const router = express.Router();

router.get("/:adminId", getAdminById);

// Check if Admin ID exists
router.post("/check-admin-id", async (req, res) => {
  try {
    const { adminId } = req.body;

    if (!adminId || adminId.trim().length === 0) {
      return res.status(400).json({
        success: false,
        exists: false,
        message: "Admin ID is required",
      });
    }

    const existingAdmin = await Registration.findOne({
      where: { admin_id: adminId.trim() },
    });

    const exists = !!existingAdmin;

    res.json({
      success: true,
      exists: exists,
    });
  } catch (error) {
    console.error("❌ Error checking admin ID:", error);
    res.status(500).json({
      success: false,
      exists: false,
      message: "Server error",
    });
  }
});

// Admin login
router.post("/login", async (req, res) => {
  const { adminId, password } = req.body;

  try {
    const admin = await Registration.findOne({ where: { admin_id: adminId } });
    if (!admin)
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch)
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials" });

    const token = jwt.sign(
      { adminId: admin.admin_id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({ success: true, token, fullName: admin.full_name });
  } catch (err) {
    console.error("❌ Login error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
});

module.exports = router;
