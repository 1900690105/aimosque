// =====================================
// routes/payment.js - Payment related routes
const express = require("express");
const razorpay = require("../config/razorpay");

const router = express.Router();

// Create Razorpay order
router.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    const options = {
      amount: amount * 100, // amount in paise
      currency: "INR",
      receipt: "donation_rcptid_11",
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    console.error("Error creating Razorpay order:", err);
    res.status(500).json({ error: "Error creating order" });
  }
});

module.exports = router;
