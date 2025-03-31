const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Get All Products
router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

// Add Product
router.post('/', async (req, res) => {
    const { name, price, description, image } = req.body;

    const product = new Product({ name, price, description, image });
    await product.save();
    res.status(201).json({ message: "Product added successfully" });
});

module.exports = router;
