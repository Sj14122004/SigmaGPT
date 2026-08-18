#  SigmaGPT

SigmaGPT is a full-stack AI chat application inspired by ChatGPT. It provides an interactive conversational interface where users can create multiple chat threads, continue previous conversations, and store their chat history permanently.

The application uses the **Google Gemini API** for AI-generated responses and **MongoDB Atlas** for persistent chat storage.

---

##  Live Demo

🔗 **Frontend:**  
https://sigma-gpt-dq6s.vercel.app/


---

## Features

-  AI-powered conversations using Google Gemini
-  Real-time chat interface
-  Create multiple conversation threads
-  Persistent chat history using MongoDB
-  Continue previous conversations
-  Delete conversation threads
-  Markdown rendering
-  Code syntax highlighting
-  Loading animation while waiting for AI response
-  Responsive user interface
-  Environment variables for API keys and database credentials
-  Frontend and backend deployed on Vercel

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- CSS
- React Markdown
- Highlight.js
- React Spinners

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API

### AI

- Google Gemini API

### Deployment

- Vercel
- MongoDB Atlas

---



Installation
1. Clone the repository
git clone https://github.com/Sj14122004/SigmaGPT.git
cd SigmaGPT
Frontend Setup

Go to the frontend directory:

cd Frontend

Install dependencies:

npm install

Create:

.env

Add:

VITE_BACKEND_URL=http://localhost:8080

Start the development server:

npm run dev

The frontend will normally run on:

http://localhost:5173


Backend Setup

Open another terminal:

cd Backend

Install dependencies:

npm install

Create a .env file:

MONGODB_URI=your_mongodb_connection_string
GEMINI_API_KEY=your_gemini_api_key

Start the backend:

node server.js

The backend runs locally on:

http://localhost:8080
Environment Variables
Frontend
VITE_BACKEND_URL=http://localhost:8080


VITE_BACKEND_URL=https://sigma-gpt-dun.vercel.app
