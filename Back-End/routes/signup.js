const express = require("express");
const bcrypt = require("bcrypt");
const { User, ProfileData } = require("../models");
// const { uploadSingle } = require("../constant/multer.config");
const router = express.Router();

router.post("/",  async (req, res) => {
  try {
    const { email, firstname, lastname, middlename, phone, password } = req.body;
    // const photo = req.file?.filename;

    console.log("req.body:", req.body);
    // console.log("req.file:", req.file);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, parseInt(process.env.ROUNDS || "10"));
    const newUser = await User.create({ email, password: hashed });

    // const newProfileData = await ProfileData.create({
    //   email,
    //   firstName: firstname,
    //   middleName: middlename,
    //   lastName: lastname,
    //   phone,
    //   photo,
    // });

    // res.status(201).json({ message: "User registered", profile: newProfileData });
  } catch (error) {
    res.status(500).json({ message: "Registration failed", error: error.message });
  }
});


module.exports = router;
