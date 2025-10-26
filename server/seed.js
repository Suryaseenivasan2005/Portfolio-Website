const mongoose = require('mongoose');
require('dotenv').config();

// Import models
const Project = require('./models/Project');
const Skill = require('./models/Skill');
const About = require('./models/About');

// Sample data
const sampleProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.",
    shortDescription: "Modern e-commerce platform with React and Node.js",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500",
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true,
    category: "web",
    order: 1
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, team collaboration features, and project tracking capabilities.",
    shortDescription: "Collaborative task management with real-time updates",
    technologies: ["React", "Socket.io", "PostgreSQL", "Redis"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500",
    liveUrl: "https://example-tasks.com",
    githubUrl: "https://github.com/username/task-manager",
    featured: true,
    category: "web",
    order: 2
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard that displays current weather conditions, forecasts, and weather maps for multiple locations worldwide.",
    shortDescription: "Real-time weather dashboard with forecasts",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500",
    liveUrl: "https://example-weather.com",
    githubUrl: "https://github.com/username/weather-dashboard",
    featured: false,
    category: "web",
    order: 3
  }
];

const sampleSkills = [
  {
    name: "React",
    category: "frontend",
    proficiency: 90,
    icon: "react",
    color: "#61dafb",
    order: 1
  },
  {
    name: "Node.js",
    category: "backend",
    proficiency: 85,
    icon: "nodejs",
    color: "#339933",
    order: 2
  },
  {
    name: "MongoDB",
    category: "database",
    proficiency: 80,
    icon: "mongodb",
    color: "#47a248",
    order: 3
  },
  {
    name: "TypeScript",
    category: "frontend",
    proficiency: 75,
    icon: "typescript",
    color: "#3178c6",
    order: 4
  },
  {
    name: "Express",
    category: "backend",
    proficiency: 85,
    icon: "express",
    color: "#000000",
    order: 5
  },
  {
    name: "PostgreSQL",
    category: "database",
    proficiency: 70,
    icon: "postgresql",
    color: "#336791",
    order: 6
  },
  {
    name: "Git",
    category: "tools",
    proficiency: 90,
    icon: "git",
    color: "#f05032",
    order: 7
  },
  {
    name: "Docker",
    category: "tools",
    proficiency: 65,
    icon: "docker",
    color: "#2496ed",
    order: 8
  }
];

const sampleAbout = {
  title: "Full Stack Developer",
  content: "I'm a passionate full-stack developer with 3+ years of experience building modern web applications. I specialize in React, Node.js, and MongoDB, and I love creating user-friendly interfaces and robust backend systems. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
  resumeUrl: "https://example.com/resume.pdf",
  socialLinks: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    twitter: "https://twitter.com/username",
    email: "contact@example.com",
    website: "https://example.com"
  },
  stats: {
    projectsCompleted: 25,
    yearsOfExperience: 3,
    clientsServed: 15
  }
};

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio_db');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await About.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Insert sample data
    await Project.insertMany(sampleProjects);
    console.log('📁 Inserted sample projects');

    await Skill.insertMany(sampleSkills);
    console.log('🛠️ Inserted sample skills');

    await About.create(sampleAbout);
    console.log('👤 Inserted sample about information');

    console.log('🎉 Database seeded successfully!');
    console.log('\n📊 Sample data created:');
    console.log(`- ${sampleProjects.length} projects`);
    console.log(`- ${sampleSkills.length} skills`);
    console.log('- 1 about section');

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Disconnected from MongoDB');
    process.exit(0);
  }
}

// Run the seeder
seedDatabase();
