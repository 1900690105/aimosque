// server.js - Main entry point
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { sequelize } = require("./models");

// Import routes
const adminRoutes = require("./routes/admin");
const mosqueRoutes = require("./routes/mosque");
const donationRoutes = require("./routes/donations");
const paymentRoutes = require("./routes/payment");

const app = express();
const port = process.env.PORT || 5000;

// CORS setup
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Welcome to Ai-Miqdar Backend 🚀");
});

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/mosque", mosqueRoutes);
app.use("/api", donationRoutes);
app.use("/api", paymentRoutes);

// Sync DB and start server
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("✅ Database synced");
    app.listen(port, () =>
      console.log(`🚀 Server running on http://localhost:${port}`)
    );
  })
  .catch((err) => {
    console.error("❌ Error syncing database:", err);
  });

// app.post("/api/check-admin-id", async (req, res) => {
//   try {
//     const { adminId } = req.body;

//     if (!adminId || adminId.trim().length === 0) {
//       return res.status(400).json({
//         success: false,
//         exists: false,
//         message: "Admin ID is required",
//       });
//     }

//     // Check if admin ID exists in Registration table
//     const existingAdmin = await Registration.findOne({
//       where: { admin_id: adminId.trim() },
//     });

//     const exists = !!existingAdmin;

//     res.json({
//       success: true,
//       exists: exists,
//     });
//   } catch (error) {
//     console.error("❌ Error checking admin ID:", error);
//     res.status(500).json({
//       success: false,
//       exists: false,
//       message: "Server error",
//     });
//   }
// });

// // server.js
// const express = require("express");
// const cors = require("cors");
// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const fs = require("fs");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const Razorpay = require("razorpay");
// require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 5000;

// // ✅ Sequelize models (moved to top after requires)
// const {
//   sequelize,
//   Registration,
//   MosqueDetail,
//   FinancialDetail,
//   PrayerTiming,
//   Donate,
// } = require("./models");

// // ✅ CORS setup (unified)
// const corsOptions = {
//   origin: "http://localhost:5173", // frontend URL
//   credentials: true,
// };
// app.use(cors(corsOptions));
// app.use(express.json());

// // ✅ Razorpay instance
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// // ✅ Multer setup (store temp files in /uploads)
// const upload = multer({ dest: "uploads/" });

// // ✅ Cloudinary config
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
//   timeout: 60000,
// });

// // ✅ Helper: Cloudinary streaming upload
// const streamUpload = (filePath) => {
//   return new Promise((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       { folder: "mosques" },
//       (error, result) => {
//         if (result) resolve(result);
//         else reject(error);
//       }
//     );
//     fs.createReadStream(filePath).pipe(stream);
//   });
// };

// // ✅ Test route
// app.get("/", (req, res) => {
//   res.send("Welcome to Ai-Miqdar Backend 🚀");
// });

// // ✅ NEW API: Check if Admin ID exists
// app.post("/api/check-admin-id", async (req, res) => {
//   try {
//     const { adminId } = req.body;

//     if (!adminId || adminId.trim().length === 0) {
//       return res.status(400).json({
//         success: false,
//         exists: false,
//         message: "Admin ID is required",
//       });
//     }

//     // Check if admin ID exists in Registration table
//     const existingAdmin = await Registration.findOne({
//       where: { admin_id: adminId.trim() },
//     });

//     const exists = !!existingAdmin;

//     res.json({
//       success: true,
//       exists: exists,
//     });
//   } catch (error) {
//     console.error("❌ Error checking admin ID:", error);
//     res.status(500).json({
//       success: false,
//       exists: false,
//       message: "Server error",
//     });
//   }
// });

// // ✅ API: Save mosque profile
// app.post(
//   "/api/saveMosqueProfile",
//   upload.single("mosqueImage"),
//   async (req, res) => {
//     const {
//       adminId,
//       password,
//       fullName,
//       mosqueName,
//       mosqueHistory,
//       mosqueAddress,
//       bankAccountNumber,
//       bankIFSC,
//       bankAccountHolder,
//       bankName,
//       upiId,
//       enableDonationTracking,
//     } = req.body;

//     try {
//       let imageUrl = null;

//       if (req.file) {
//         const result = await streamUpload(req.file.path);
//         imageUrl = result.secure_url;
//         fs.unlinkSync(req.file.path); // cleanup temp file
//       }

//       // ✅ Create registration (skip if exists)
//       const [admin, created] = await Registration.findOrCreate({
//         where: { admin_id: adminId },
//         defaults: {
//           password: await bcrypt.hash(password, 10),
//           full_name: fullName,
//         },
//       });

//       // ✅ Create mosque details
//       await MosqueDetail.create({
//         mosque_name: mosqueName,
//         mosque_image: imageUrl,
//         mosque_history: mosqueHistory,
//         mosque_address: mosqueAddress,
//         admin_id: adminId,
//       });

//       // ✅ Create financial details
//       await FinancialDetail.create({
//         bank_account_number: bankAccountNumber,
//         bank_ifsc: bankIFSC,
//         bank_account_holder: bankAccountHolder,
//         bank_name: bankName,
//         upi_id: upiId,
//         enable_donation_tracking: enableDonationTracking === "true",
//         admin_id: adminId,
//       });

//       // ✅ Create prayer timings
//       await PrayerTiming.create({
//         admin_id: req.body.adminId,
//         fajr: req.body.fajr,
//         dhuhr: req.body.dhuhr,
//         asr: req.body.asr,
//         maghrib: req.body.maghrib,
//         isha: req.body.isha,
//         jummah: req.body.jummah,
//       });

//       res.json({
//         success: true,
//         message: "Mosque profile saved successfully!",
//       });
//     } catch (err) {
//       console.error("❌ Error saving mosque profile:", err);
//       res.status(500).json({ success: false, message: "Error saving profile" });
//     }
//   }
// );

// // ✅ API: Admin login
// app.post("/api/admin/login", async (req, res) => {
//   const { adminId, password } = req.body;

//   try {
//     const admin = await Registration.findOne({ where: { admin_id: adminId } });
//     if (!admin)
//       return res
//         .status(401)
//         .json({ success: false, message: "Invalid credentials" });

//     const isMatch = await bcrypt.compare(password, admin.password);
//     if (!isMatch)
//       return res
//         .status(401)
//         .json({ success: false, message: "Invalid credentials" });

//     // ✅ Generate JWT
//     const token = jwt.sign(
//       { adminId: admin.admin_id },
//       process.env.JWT_SECRET,
//       {
//         expiresIn: "1h",
//       }
//     );

//     res.json({ success: true, token, fullName: admin.full_name });
//   } catch (err) {
//     console.error("❌ Login error:", err);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// });

// // ✅ API: Get all mosques
// app.get("/api/mosques", async (req, res) => {
//   try {
//     const mosques = await MosqueDetail.findAll({
//       attributes: ["id", "mosque_name", "admin_id"], // fetch only id and name
//     });
//     res.json(mosques);
//   } catch (error) {
//     console.error("Error fetching mosques:", error);
//     res.status(500).json({ error: "Failed to fetch mosques" });
//   }
// });

// // ✅ API: Create Razorpay order
// app.post("/api/create-order", async (req, res) => {
//   try {
//     const { amount } = req.body;

//     const options = {
//       amount: amount * 100, // amount in paise
//       currency: "INR",
//       receipt: "donation_rcptid_11",
//     };

//     const order = await razorpay.orders.create(options);
//     res.json(order);
//   } catch (err) {
//     console.error("Error creating Razorpay order:", err);
//     res.status(500).json({ error: "Error creating order" });
//   }
// });

// // ✅ Import donation routes
// const donateRoutes = require("./routes/donations");
// app.use("/api", donateRoutes);

// // ✅ Sync DB and start server (unified)
// sequelize
//   .sync({ alter: true }) // adjust to { force: true } only if you want to drop tables
//   .then(() => {
//     console.log("✅ Database synced");
//     app.listen(port, () =>
//       console.log(`🚀 Server running on http://localhost:${port}`)
//     );
//   })
//   .catch((err) => {
//     console.error("❌ Error syncing database:", err);
//   });

// // ✅ API: Get donations data
// app.get("/api/donationsdata", async (req, res) => {
//   try {
//     const donations = await Donate.findAll({
//       attributes: ["donor_name", "amount"], // columns from Donates table
//       order: [["createdAt", "DESC"]],
//       limit: 5, // show latest 5
//     });
//     res.json(donations);
//   } catch (error) {
//     console.error("Error fetching donations:", error);
//     res.status(500).json({ error: "Failed to fetch donations" });
//   }
// });
