// controllers/adminController.js
const {
  Registration,
  MosqueDetail,
  FinancialDetail,
  PrayerTiming,
} = require("../models");

const getAdminById = async (req, res) => {
  try {
    const { adminId } = req.params;

    // Find admin
    const admin = await Registration.findOne({ where: { admin_id: adminId } });

    // Find related details
    const mosqueDetail = await MosqueDetail.findOne({
      where: { admin_id: adminId },
    });
    const financialDetail = await FinancialDetail.findOne({
      where: { admin_id: adminId },
    });
    const prayerTiming = await PrayerTiming.findOne({
      where: { admin_id: adminId },
    });

    // Check if data exists
    if (!admin || !mosqueDetail || !financialDetail || !prayerTiming) {
      return res
        .status(404)
        .json({
          success: false,
          message: "Admin or related details not found",
        });
    }

    // Remove password
    const { password, ...safeAdmin } = admin.toJSON();

    res.json({
      success: true,
      admin: safeAdmin,
      mosqueDetail,
      financialDetail,
      prayerTiming,
    });
  } catch (error) {
    console.error("❌ Error fetching admin:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { getAdminById };

// // controllers/adminController.js
// const { Registration, MosqueDetail } = require("../models");

// const getAdminById = async (req, res) => {
//   try {
//     const { adminId } = req.params;

//     // Find admin
//     const admin = await Registration.findOne({ where: { admin_id: adminId } });

//     // Find mosque details for that admin
//     const mosqueDetail = await MosqueDetail.findOne({
//       where: { admin_id: adminId },
//     });

//     // Check if both exist
//     if (!admin || !mosqueDetail) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Admin or Mosque details not found" });
//     }

//     // Don’t send password back
//     const { password, ...safeAdmin } = admin.toJSON();

//     res.json({
//       success: true,
//       admin: safeAdmin,
//       mosqueDetail: mosqueDetail, // return query result, not model
//     });
//   } catch (error) {
//     console.error("❌ Error fetching admin:", error);
//     res.status(500).json({ success: false, message: "Server error" });
//   }
// };

// module.exports = { getAdminById };
