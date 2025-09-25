// controllers/donationController.js
const { Donate } = require("../models"); // Import the Donation model

// Fetch all donations
const getAllDonations = async (req, res) => {
  try {
    const donations = await Donate.findAll({
      order: [["createdAt", "DESC"]], // optional: sort by date
    });

    res.status(200).json({
      success: true,
      message: "Donations fetched successfully",
      data: donations,
    });
  } catch (error) {
    console.error("Error fetching donations:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching donations",
      error: error.message,
    });
  }
};

// Fetch donations by a specific mosque/admin (optional)
const getDonationsByAdmin = async (req, res) => {
  const { adminId } = req.params;

  try {
    const donations = await Donate.findAll({
      where: { admin_id: adminId },
      order: [["createdAt", "DESC"]],
    });

    res.status(200).json({
      success: true,
      message: `Donations for admin ${adminId} fetched successfully`,
      data: donations,
    });
  } catch (error) {
    console.error("Error fetching donations by admin:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching donations by admin",
      error: error.message,
    });
  }
};

module.exports = {
  getAllDonations,
  getDonationsByAdmin,
};

// // controllers/donationController.js
// const { Donation } = require("../models"); // Import the Donation model

// // Fetch all donations
// const getAllDonations = async (req, res) => {
//   try {
//     const donations = await Donation.findAll({
//       order: [["createdAt", "DESC"]], // optional: sort by date
//     });

//     res.status(200).json({
//       success: true,
//       message: "Donations fetched successfully",
//       data: donations,
//     });
//   } catch (error) {
//     console.error("Error fetching donations:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while fetching donations",
//       error: error.message,
//     });
//   }
// };

// // Fetch donations by a specific mosque/admin (optional)
// const getDonationsByAdmin = async (req, res) => {
//   const { adminId } = req.params;

//   try {
//     const donations = await Donation.findAll({
//       where: { admin_id: adminId },
//       order: [["createdAt", "DESC"]],
//     });

//     res.status(200).json({
//       success: true,
//       message: `Donations for admin ${adminId} fetched successfully`,
//       data: donations,
//     });
//   } catch (error) {
//     console.error("Error fetching donations by admin:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error while fetching donations by admin",
//       error: error.message,
//     });
//   }
// };

// module.exports = {
//   getAllDonations,
//   getDonationsByAdmin,
// };
