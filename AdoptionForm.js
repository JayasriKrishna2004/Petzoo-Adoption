const express = require('express');
const router = express.Router();

// Mongoose schema for adoption form submissions
const mongoose = require('mongoose');

const adoptionFormSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  address: String,
  petType: String,
  petName: String,
  message: String,
  dateSubmitted: {
    type: Date,
    default: Date.now,
  },
});

// Corrected Mongoose model
const AdoptionForm = mongoose.model('AdoptionForm', adoptionFormSchema);

// Route to handle form submissions
router.post('/api/adoption', async (req, res) => {
  const { name, email, phone, address, petType, petName, message } = req.body;

  // Simple validation
  if (!name || !email || !phone || !address || !petType || !petName) {
    return res.status(400).json({ error: 'All required fields must be filled.' });
  }

  try {
    const newFormSubmission = new AdoptionForm({
      name,
      email,
      phone,
      address,
      petType,
      petName,
      message,
    });

    await newFormSubmission.save();

    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error saving form submission:', error);
    res.status(500).json({ error: 'Failed to submit form. Please try again.' });
  }
});

module.exports = router;
