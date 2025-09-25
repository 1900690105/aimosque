// routes/mosqueRoutes.js
const express = require("express");
const router = express.Router();
const { MosqueDetail } = require("../models");
const authMiddleware = require("../middlewares/authMiddleware");

// ✅ Fetch mosque details by adminId from token
router.get("/my-mosque", authMiddleware, async (req, res) => {
  try {
    const mosque = await MosqueDetail.findOne({
      where: { admin_id: req.adminId }, // ✅ comes from token
    });

    if (!mosque) return res.status(404).json({ message: "No mosque found" });

    res.json(mosque);
  } catch (err) {
    console.error("Error fetching mosque:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
