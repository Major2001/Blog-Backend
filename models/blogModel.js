const mongoose = require('mongoose');

exports.blogSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: [true, 'A cycle must have a description'],
    minlength: 20,
  },
  model: {
    type: String,
    trim: true,
  },
  condition: {
    type: String,
    trim: true,
    required: true,
    enum: {
      values: ['bad', 'good', 'excellent'],
      message: 'Condition can only be good, excellent or bad',
    },
  },
  available: {
    type: Boolean,
    default: true,
  },
});

exports.Blog = mongoose.model('Blog', this.blogSchema);
