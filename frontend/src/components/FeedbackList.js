import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FeedbackList = () => {
  const [feedback, setFeedback] = useState([]);
  const navigate = useNavigate();

  // Fetch feedback list
  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get('http://localhost:5000/feedback', { withCredentials: true });
        setFeedback(response.data);
      } catch (error) {
        console.error('Error fetching feedback:', error);
      }
    };
    fetchFeedback();
  }, []);

  // Navigate to feedback form
  const handleGiveMoreFeedback = () => {
    navigate('/feedback');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-4xl overflow-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Feedback List</h2>
        <ul className="space-y-4">
          {feedback.map((item) => (
            <li key={item._id} className="border-b pb-4 text-gray-900">
              <strong className="block text-gray-700">{item.category}</strong>
              <span className="text-gray-500">Rating: {item.rating}</span>
              <p className="text-gray-700">{item.comments}</p>
              <span className="block text-gray-500">Submitted by: {item.username}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4 align-center">
          <button
            onClick={handleGiveMoreFeedback}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Give More Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackList;