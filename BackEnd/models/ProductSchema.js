const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define schema for the Product model
const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    ean: String,
    upc: String,
    image: String,
    images: [{
        title: String,
        description: String,
        url: String
    }],
    
    net_price: Number,
    taxes: Number,
    price: Number,
    categories: [{ type: Number }],
    tags: [{ type: String }]
});

module.exports = mongoose.model('prod_obj', productSchema)