const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  duration: {
    type: Number,
  },
  skillsOffered: [{
    type:String,
  }],
  courseImage: {
    type: String,
    default:"placeholder.webp",
  },
  isVirtual: {
    type: Boolean,
    default: false, // for seeding dummy users
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  }
});

module.exports = mongoose.model('course', courseSchema);