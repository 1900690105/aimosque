// routes/mosque.js - Mosque related routes
const express = require("express");
const fs = require("fs");
const bcrypt = require("bcrypt");
const upload = require("../config/multer");
const { streamUpload } = require("../utils/cloudinaryHelper");
const {
  Registration,
  MosqueDetail,
  FinancialDetail,
  PrayerTiming,
} = require("../models");

const router = express.Router();

// Save mosque profile
router.post("/save-profile", upload.single("mosqueImage"), async (req, res) => {
  const {
    adminId,
    password,
    fullName,
    mosqueName,
    mosqueHistory,
    mosqueAddress,
    bankAccountNumber,
    bankIFSC,
    bankAccountHolder,
    bankName,
    upiId,
    enableDonationTracking,
  } = req.body;

  try {
    let imageUrl = null;

    if (req.file) {
      const result = await streamUpload(req.file.path);
      imageUrl = result.secure_url;
      fs.unlinkSync(req.file.path); // cleanup temp file
    }

    // Create registration (skip if exists)
    const [admin, created] = await Registration.findOrCreate({
      where: { admin_id: adminId },
      defaults: {
        password: await bcrypt.hash(password, 10),
        full_name: fullName,
      },
    });

    // Create mosque details
    await MosqueDetail.create({
      mosque_name: mosqueName,
      mosque_image: imageUrl,
      mosque_history: mosqueHistory,
      mosque_address: mosqueAddress,
      admin_id: adminId,
    });

    // Create financial details
    await FinancialDetail.create({
      bank_account_number: bankAccountNumber,
      bank_ifsc: bankIFSC,
      bank_account_holder: bankAccountHolder,
      bank_name: bankName,
      upi_id: upiId,
      enable_donation_tracking: enableDonationTracking === "true",
      admin_id: adminId,
    });

    // Create prayer timings
    await PrayerTiming.create({
      admin_id: req.body.adminId,
      fajr: req.body.fajr,
      dhuhr: req.body.dhuhr,
      asr: req.body.asr,
      maghrib: req.body.maghrib,
      isha: req.body.isha,
      jummah: req.body.jummah,
    });

    res.json({
      success: true,
      message: "Mosque profile saved successfully!",
    });
  } catch (err) {
    console.error("❌ Error saving mosque profile:", err);
    res.status(500).json({ success: false, message: "Error saving profile" });
  }
});

// Get all mosques
router.get("/mosques", async (req, res) => {
  try {
    const mosques = await MosqueDetail.findAll({
      attributes: ["id", "mosque_name", "admin_id"],
    });
    res.json(mosques);
  } catch (error) {
    console.error("Error fetching mosques:", error);
    res.status(500).json({ error: "Failed to fetch mosques" });
  }
});

module.exports = router;
