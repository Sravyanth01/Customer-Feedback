const router = require('express').Router();
const feedbackController = require('../controllers/feedbackController');

// POST /feedback
router.post('/', feedbackController.submitFeedback);

// GET /feedback
router.get('/', feedbackController.getFeedback);

module.exports = router;
