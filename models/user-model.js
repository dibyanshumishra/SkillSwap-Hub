const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
  },
  location: {
    type: String,
  },
  profileImage: {
    type: String, // multer will save file path
    default:"placeholder.webp",
  },
  isVirtual: {
    type: Boolean,
    default: false, // for seeding dummy users
  },
  courseIDs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'course'
  }],
});

module.exports = mongoose.model('user', userSchema);
