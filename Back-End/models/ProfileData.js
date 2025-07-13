const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/, 'Invalid email format']
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  middleName: {
    type: String,
    trim: true,
    default: ''
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{10}$/, 'Phone must be 10 digits']  // or customize pattern
  },
  photo: {
    type: String,  // could be a URL or filename (e.g. '/uploads/abc.jpg')
    default: ''
  }
})

const ProfileData = mongoose.model("ProfileData",profileSchema)

module.exports = ProfileData;