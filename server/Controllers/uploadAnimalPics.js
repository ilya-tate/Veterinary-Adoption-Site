const cloudinary = require("cloudinary").v2;
const fs = require("fs");

const uploadAnimalPics = async (req, res) => {
  try {
    // console.log("stuff");
    const src = await cloudinary.uploader.upload(req.files.image.tempFilePath, {
      use_filename: true,
      folder: "Social Session 1",
    });
    // console.log("stuff");
    fs.unlinkSync(req.files.image.tempFilePath);
    console.log(src);
    console.log(req.files.image.tempFilePath);
    return res.status(200).json({ src: src.secure_url });
  } catch (error) {
    console.log(error);
    console.error("CLOUDINARY ERROR")
    return res.status(500).send("Cloundinary Upload Error");
  }
};

module.exports = { uploadAnimalPics };
