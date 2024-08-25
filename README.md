
# Full-Stack Blog Application

This is a full-stack blog application where users can register, log in, create posts, and comment on blog posts. Only the owner of a post can edit or delete it. The project uses a **Node.js** backend with **MongoDB** as the database and a **React** frontend.

## Features
- User authentication (Register, Login)
- Users can create, update, and delete their own posts
- Other users can view posts and add comments
- Only post owners can edit or delete their posts
- Responsive frontend design using Material-UI
- JWT-based authentication and authorization

## Tech Stack
- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js, Material-UI
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Backend on Render, Frontend on Vercel

---

## Project Structure

```
root
│
├── backend/              # Backend (Node.js) code
│   ├── controllers/      # API controller logic
│   ├── middleware/       # Authentication middleware
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── server.js         # Entry point for the server
│   └── package.json      # Dependencies for the backend
│
├── frontend/             # Frontend (React.js) code
│   ├── public/           # Static assets
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── services/     # API services (auth, posts)
│   │   ├── App.js        # Main application component
│   │   └── index.js      # Entry point for the React app
│   ├── .env              # Environment variables (API URL)
│   └── package.json      # Dependencies for the frontend
```

---

## Setup Instructions

### 1. Prerequisites
Ensure you have the following installed:
- **Node.js** (v14.x or later)
- **MongoDB Atlas** (for the cloud database)
- **Git** (for version control)

### 2. Clone the Repository
```bash
git clone https://github.com/your-username/fullstack-blog-app.git
cd fullstack-blog-app
```

### 3. Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory with the following content:
   ```plaintext
   MONGODB_URI=<Your MongoDB Atlas Connection String>
   JWT_SECRET=<Your JWT Secret>
   ```
4. Run the backend server:
   ```bash
   npm start
   ```

### 4. Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the frontend directory with the following content:
   ```plaintext
   REACT_APP_API_URL=http://localhost:5000
   ```
4. Run the frontend development server:
   ```bash
   npm start
   ```

### 5. Testing Locally
- Open your browser and go to `http://localhost:3000` to test the frontend.
- The backend should be running on `http://localhost:5000`.

---

## Deployment

### Backend Deployment (Render)
1. Push your backend code to a Git repository (GitHub, GitLab, etc.).
2. Create an account on [Render](https://render.com).
3. Create a **New Web Service** and link your repository.
4. Set up environment variables in Render:
   - `MONGODB_URI`: Your MongoDB Atlas connection string.
   - `JWT_SECRET`: Your generated JWT secret key.
5. Render will automatically deploy your backend.

### Frontend Deployment (Vercel)
1. Push your frontend code to a Git repository.
2. Create an account on [Vercel](https://vercel.com).
3. Create a **New Project** and link your repository.
4. Add the environment variable in Vercel:
   - `REACT_APP_API_URL`: Your deployed backend URL from Render (e.g., `https://your-backend-service.onrender.com`).
5. Vercel will automatically deploy your frontend.

---

## Environment Variables

For Backend:
- `MONGODB_URI`: MongoDB connection string.
- `JWT_SECRET`: Secret key for signing JWTs.

For Frontend:
- `REACT_APP_API_URL`: Backend API URL.

---

## Usage

1. **Register**: Create a new user account.
2. **Login**: Log in to your account.
3. **Create a Post**: Authenticated users can create posts.
4. **Edit/Delete Posts**: Only the post owner can edit or delete the post.
5. **Add Comments**: All users can add comments to any post.

---
