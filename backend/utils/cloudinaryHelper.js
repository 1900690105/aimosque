// =====================================
// utils/cloudinaryHelper.js - Cloudinary upload helper
const fs = require("fs");
const cloudinary = require("../config/cloudinary");

const streamUpload = (filePath) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder: "mosques" },
      (error, result) => {
        if (result) resolve(result);
        else reject(error);
      }
    );
    fs.createReadStream(filePath).pipe(stream);
  });
};

module.exports = { streamUpload };
