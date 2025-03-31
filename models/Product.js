const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please enter product title']
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price']
    },
    description: {
        type: String,
        required: [true, 'Please enter product description']
    },
    category: {
        type: String,
        required: [true, 'Please enter product category']
    },
    image: {
        type: String,
        required: [true, 'Please enter product image URL']
    },
    rating: {
        type: Number,
        default: 0
    },
    discount: {
        type: Number,
        default: 0
    },
    offerPrice: {
        type: Number,
        default: 0
    },
    reviews: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        rating: Number,
        comment: String,
        createdAt: {
            type: Date,
            default: Date.now
        }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema); 