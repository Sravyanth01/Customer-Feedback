const express = require('express');
const passport = require('passport');

const router = express.Router();

// Google OAuth login route
router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Google OAuth callback route
router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }), 
  (req, res) => {
    res.redirect('http://localhost:3000/feedback'); 
  }
);

// Route to get current user
router.get('/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
