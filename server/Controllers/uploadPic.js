const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const uploadAnimalPic = async (req, res) => {
  try {
    const src = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
      use_filename: true,
      folder: "ANIMAL PICS",
    });
    fs.unlinkSync(req.files.image.tempFilePath);
    return res.status(200).json({ src: src.secure_url });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Cloundinary Upload Error");
  }
};

module.exports = { uploadAnimalPic };
