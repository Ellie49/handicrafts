const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

// Get all businesses
router.get('/', async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new business
router.post('/', async (req, res) => {
  const business = new Business({
    name: req.body.name,
    logo: req.body.logo,
    yearsOfOperation: req.body.yearsOfOperation,
    numberOfProducts: req.body.numberOfProducts,
    products: req.body.products
  });

  try {
    const newBusiness = await business.save();
    res.status(201).json(newBusiness);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
