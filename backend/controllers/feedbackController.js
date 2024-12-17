const Feedback = require('../models/Feedback');

// Submit feedback handler
const submitFeedback = async (req, res) => {
  const { category, rating, comments } = req.body;
  const username = req.user.username;

  const feedback = new Feedback({
    category,
    rating,
    comments,
    user: req.user.id,
    username,
  });

  try {
    await feedback.save();
    res.status(201).json(feedback);
  } catch (error) {
    res.status(400).json({ error: 'Error submitting feedback' });
  }
};

// Retrieve feedback handler
const getFeedback = async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(400).json({ error: 'Error retrieving feedback' });
  }
};

module.exports = {
  submitFeedback,
  getFeedback
};
