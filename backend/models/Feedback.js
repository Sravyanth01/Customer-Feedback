const mongoose = require('mongoose');

// Define feedback schema
const feedbackSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Feedback', feedbackSchema);
