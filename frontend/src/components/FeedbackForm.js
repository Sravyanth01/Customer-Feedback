import React, { useState } from 'react';
import axios from 'axios';
import Rating from 'react-rating-stars-component';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const [category, setCategory] = useState('Product Features');
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState('');
  const navigate = useNavigate();

   // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/feedback', {
        category,
        rating,
        comments
      }, { withCredentials: true });
      console.log(response.data);
      navigate('/feedback-list');
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Submit Feedback</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-white text-gray-900"
          >
            <option value="Product Features">Product Features</option>
            <option value="Product Pricing">Product Pricing</option>
            <option value="Product Usability">Product Usability</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Rating:</label>
          <Rating
            count={5}
            value={rating}
            onChange={(newRating) => setRating(newRating)}
            size={24}
            activeColor="#ffd700"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Comments:</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-white text-gray-900"
          />
        </div>
        <div className='flex align-center justify-center'>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;