const express = require("express");
const router = express.Router();
const { Donate } = require("../models");

const {
  getAllDonations,
  getDonationsByAdmin,
} = require("../controllers/donationController");

router.get("/all", getAllDonations);

// Route to fetch donations by admin
router.get("/admin/:adminId", getDonationsByAdmin);

// ✅ Save payment after Razorpay success
router.post("/save-payment", async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_signature,
      mosque_name,
      admin_id,
      amount,
      payment_id,
      donor_name,
      donor_mobile,
    } = req.body;

    if (!mosque_name || !admin_id || !amount || !payment_id) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: mosque_name, admin_id, amount",
      });
    }

    const donation = await Donate.create({
      mosque_name,
      donor_name,
      donor_mobile,
      admin_id,
      amount: parseFloat(amount),
      time: new Date(),
      payment_id,
      razorpay_order_id,
      razorpay_signature,
    });

    res.json({
      success: true,
      message: "Donation saved successfully",
      donation,
    });
  } catch (err) {
    console.error("❌ Error saving donation:", err);
    res.status(500).json({
      success: false,
      error: "Internal server error",
      details: process.env.NODE_ENV === "development" ? err.message : undefined,
    });
  }
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const { Donate } = require("../models");

// const {
//   getAllDonations,
//   getDonationsByAdmin,
// } = require("../controllers/donationController");

// // ✅ Debug log
// console.log("Donate model available:", !!Donate);

// // Route to fetch all donations
// router.get("/", getAllDonations);

// // Route to fetch donations by admin
// router.get("/admin/:adminId", getDonationsByAdmin);
// router.get("/:adminId", getAdminById);

// // ✅ Save payment after Razorpay success
// router.post("/save-payment", async (req, res) => {
//   try {
//     const {
//       razorpay_order_id,
//       razorpay_signature,
//       mosque_name,
//       admin_id,
//       amount,
//       payment_id,
//       donor_name,
//       donor_mobile,
//     } = req.body;

//     // Validate required fields
//     if (!mosque_name || !admin_id || !amount || !payment_id) {
//       return res.status(400).json({
//         success: false,
//         error: "Missing required fields: mosque_name, admin_id, amount",
//       });
//     }

//     // Save donation entry
//     const donation = await Donate.create({
//       mosque_name,
//       donor_name,
//       donor_mobile,
//       admin_id,
//       amount: parseFloat(amount), // ensure numeric
//       time: new Date(),
//       payment_id,
//       razorpay_order_id,
//       razorpay_signature,
//     });

//     res.json({
//       success: true,
//       message: "Donation saved successfully",
//       donation,
//     });
//   } catch (err) {
//     console.error("❌ Error saving donation:", err);
//     res.status(500).json({
//       success: false,
//       error: "Internal server error",
//       details: process.env.NODE_ENV === "development" ? err.message : undefined,
//     });
//   }
// });

// module.exports = router;
