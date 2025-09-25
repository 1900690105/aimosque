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
// const donateRoutes = require("./routes/admin");

const app = express();
const port = process.env.PORT || 5000;

// CORS setup
const corsOptions = {
  origin: function (origin, callback) {
    // allow requests from any origin (browser, emulator, mobile)
    callback(null, true);
  },
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
app.use("/api/donate", donationRoutes);

// Sync DB and start server
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("✅ Database synced");
    require("dotenv").config();
    console.log("DATABASE_URL =", process.env.DATABASE_URL);

    app.listen(port, () =>
      console.log(`🚀 Server running on http://${process.env.BASE_URL}:${port}`)
    );
  })
  .catch((err) => {
    console.error("❌ Error syncing database:", err);
  });
