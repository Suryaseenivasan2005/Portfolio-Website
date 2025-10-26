const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  resumeUrl: {
    type: String,
    validate: {
      validator: function(v) {
        return !v || /^https?:\/\/.+/.test(v);
      },
      message: 'Resume URL must be a valid HTTP/HTTPS URL'
    }
  },
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String,
    email: String,
    website: String
  },
  stats: {
    projectsCompleted: {
      type: Number,
      default: 0
    },
    yearsOfExperience: {
      type: Number,
      default: 0
    },
    clientsServed: {
      type: Number,
      default: 0
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('About', aboutSchema);
