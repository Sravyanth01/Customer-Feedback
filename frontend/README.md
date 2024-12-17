# Customer-Feedback-Frontend
This is a customer feedback platform that integrates Google OAuth for user authentication and Frill.co for managing feedback data. The application is built using React for the frontend and Node.js for the backend.
## Features
- Google OAuth authentication
- Submit and view feedback
- Integration with Frill.co for feedback management
- Secure sessions using express-session
- Cross-Origin Resource Sharing (CORS) enabled
## Installation
### Prerequisites
- Node.js and npm installed
- MongoDB installed and running
- Google OAuth credentials
- Frill.co API key
### Steps
1. Clone the repository:
  For backend : git clone https://github.com/Vakar18/Customer-Feedback
  For frontennd : git clone https://github.com/Vakar18/frontend
3. Navigate to the project directory:
    cd customer-feedback
4. Install backend dependencies:
    cd backend
    npm install
5. Create a `.env` file in the backend directory and add the following:
    MONGO_URI=<your_mongo_uri>
    GOOGLE_CLIENT_ID=<your_google_client_id>
    GOOGLE_CLIENT_SECRET=<your_google_client_secret>
    SESSION_SECRET=<your_session_secret>
    FRILL_API_KEY=<your_frill_api_key>
6. Start the backend server:
    npm start
7. Navigate to the frontend directory:
    cd ../frontend
8. Install frontend dependencies:
    npm install
9. Start the frontend development server:
    npm start
## Usage
- Visit `http://localhost:3000` in your browser.
- Click on "Login with Google" to authenticate.
- Submit feedback using the form.
- View submitted feedback in the feedback list.
## Project Structure
- `backend/`: Contains backend code.
- `frontend/`: Contains frontend code.

