const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  about: {
    type: String,
    required: true,
  },
  price: {
    type: String,
  },
  duration: {
    type: String,
  },
  courseImage: {
    type: String,
    default:"placeholder.webp",
  },
  isVirtual: {
    type: Boolean,
    default: false, // for seeding dummy users
  },
});

module.exports = mongoose.model('course', courseSchema);