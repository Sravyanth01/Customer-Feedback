const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
  },
  email: {
    type: String,
  },
  username: {
    type: String,
  },
});

module.exports = mongoose.model('User', userSchema);
