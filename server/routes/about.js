const express = require('express');
const router = express.Router();
const About = require('../models/About');
const { body, validationResult } = require('express-validator');

// GET /api/about - Get about information
router.get('/', async (req, res) => {
  try {
    const about = await About.findOne();
    
    if (!about) {
      return res.status(404).json({
        success: false,
        message: 'About information not found'
      });
    }
    
    res.json({
      success: true,
      data: about
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching about information',
      error: error.message
    });
  }
});

// POST /api/about - Create about information
router.post('/', [
  body('title').notEmpty().withMessage('Title is required'),
  body('content').notEmpty().withMessage('Content is required'),
  body('image').notEmpty().withMessage('Image URL is required')
], async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors',
        errors: errors.array()
      });
    }
    
    // Check if about info already exists
    const existingAbout = await About.findOne();
    if (existingAbout) {
      return res.status(400).json({
        success: false,
        message: 'About information already exists. Use PUT to update.'
      });
    }
    
    const about = new About(req.body);
    await about.save();
    
    res.status(201).json({
      success: true,
      message: 'About information created successfully',
      data: about
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error creating about information',
      error: error.message
    });
  }
});

// PUT /api/about - Update about information
router.put('/', async (req, res) => {
  try {
    const about = await About.findOneAndUpdate(
      {},
      req.body,
      { new: true, upsert: true, runValidators: true }
    );
    
    res.json({
      success: true,
      message: 'About information updated successfully',
      data: about
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating about information',
      error: error.message
    });
  }
});

module.exports = router;
