# Portfolio Backend API

A Node.js/Express backend API for the Portfolio Website with MongoDB integration.

## Features

- **Projects Management**: CRUD operations for portfolio projects
- **Skills Management**: Manage technical skills with categories and proficiency levels
- **Contact Form**: Handle contact form submissions
- **About Section**: Manage about information and social links
- **Authentication**: Placeholder for future admin authentication
- **Security**: Rate limiting, CORS, Helmet security headers
- **Validation**: Input validation using express-validator

## API Endpoints

### Health Check
- `GET /api/health` - Server health status

### Projects
- `GET /api/projects` - Get all projects (supports filtering by featured, category, limit)
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills (supports filtering by category)
- `GET /api/skills/:id` - Get single skill
- `POST /api/skills` - Create new skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Contact
- `GET /api/contact` - Get all contact messages (admin)
- `POST /api/contact` - Submit contact form
- `PUT /api/contact/:id` - Update message status
- `DELETE /api/contact/:id` - Delete message

### About
- `GET /api/about` - Get about information
- `POST /api/about` - Create about information
- `PUT /api/about` - Update about information

### Authentication (Placeholder)
- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/me` - Get current user info

## Environment Variables

Create a `.env` file in the server directory:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/portfolio_db
JWT_SECRET=your_jwt_secret_key_here
CLIENT_URL=http://localhost:5173
```

## Installation & Setup

1. **Install dependencies:**
   ```bash
   cd server
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env
   # Edit .env with your MongoDB URI
   ```

3. **Start the server:**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   npm start
   ```

## Database Models

### Project
- title, description, shortDescription
- technologies (array)
- image, liveUrl, githubUrl
- featured (boolean), category, order

### Skill
- name, category, proficiency (1-100)
- icon, color, order

### Contact
- name, email, subject, message
- status (new, read, replied, archived)
- ipAddress, userAgent

### About
- title, content, image, resumeUrl
- socialLinks (github, linkedin, twitter, email, website)
- stats (projectsCompleted, yearsOfExperience, clientsServed)

## Development

The server runs on port 5000 by default and includes:
- Automatic MongoDB connection
- Request logging with Morgan
- Error handling middleware
- CORS configuration for client
- Rate limiting for security
- Input validation for all endpoints

## Testing

Test the API endpoints using tools like Postman or curl:

```bash
# Health check
curl http://localhost:5000/api/health

# Get all projects
curl http://localhost:5000/api/projects

# Submit contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","subject":"Test","message":"Hello!"}'
```
