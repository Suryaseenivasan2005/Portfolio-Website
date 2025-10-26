# Portfolio Website - Full Stack Setup

This project consists of a React frontend (client) and Node.js/Express backend (server) with MongoDB integration.

## Project Structure

```
Portfolio Website Design/
├── client/                 # React frontend (Vite + TypeScript)
│   ├── src/
│   ├── package.json
│   └── vite.config.ts
├── server/                 # Node.js backend (Express + MongoDB)
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── package.json
│   └── server.js
└── README.md              # This file
```

## Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### 1. Install Dependencies

**For the client (frontend):**
```bash
cd client
npm install
```

**For the server (backend):**
```bash
cd server
npm install
```

### 2. Environment Setup

**Server environment:**
```bash
cd server
cp env.example .env
# Edit .env with your MongoDB URI
```

### 3. Run the Applications

**Terminal 1 - Start the backend server:**
```bash
cd server
npm run dev
```
Server will run on: http://localhost:5000

**Terminal 2 - Start the frontend client:**
```bash
cd client
npm run dev
```
Client will run on: http://localhost:5173

## API Endpoints

The backend provides the following API endpoints:

- `GET /api/health` - Health check
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create project
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create skill
- `POST /api/contact` - Submit contact form
- `GET /api/about` - Get about information

## Database Setup

### Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Use `mongodb://localhost:27017/portfolio_db` in your `.env`

### MongoDB Atlas (Cloud)
1. Create a MongoDB Atlas account
2. Create a cluster
3. Get your connection string
4. Replace `MONGODB_URI` in `.env` with your Atlas URI

## Development Scripts

### Client Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
```

### Server Scripts
```bash
npm run dev      # Start with nodemon (auto-restart)
npm start        # Start production server
```

## Features

### Frontend (Client)
- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Radix UI components
- Responsive design
- Modern animations

### Backend (Server)
- Express.js framework
- MongoDB with Mongoose
- RESTful API design
- Input validation
- Security middleware (CORS, Helmet, Rate limiting)
- Error handling
- Request logging

## Next Steps

1. **Connect to your MongoDB Atlas:**
   - Replace the MongoDB URI in `server/.env`
   - Test the connection by starting the server

2. **Add sample data:**
   - Use the API endpoints to add projects, skills, and about information
   - Test the contact form functionality

3. **Integrate frontend with backend:**
   - Update frontend components to fetch data from API
   - Implement contact form submission
   - Add data management features

4. **Deploy:**
   - Deploy backend to services like Heroku, Railway, or Vercel
   - Deploy frontend to Vercel, Netlify, or similar
   - Update CORS settings for production

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error:**
   - Check if MongoDB is running
   - Verify the connection string in `.env`
   - Ensure network access if using Atlas

2. **CORS Issues:**
   - Check `CLIENT_URL` in server `.env`
   - Ensure frontend URL matches the CORS configuration

3. **Port Conflicts:**
   - Change `PORT` in server `.env` if 5000 is occupied
   - Update frontend API calls if port changes

### Getting Help

- Check server logs for detailed error messages
- Use browser developer tools for frontend debugging
- Test API endpoints with Postman or curl
- Verify environment variables are loaded correctly
