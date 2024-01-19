const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/products_comparison', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Product model
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    platform: String, // 'amazon' or 'flipkart'
    // Add more fields as needed
});

const Product = mongoose.model('Product', productSchema);

// Express routes
app.use(express.json());

app.post('/search', async (req, res) => {
    const { productName } = req.body;

    try {
        // Call Amazon API (replace 'YOUR_AMAZON_API_KEY' with your actual key)
        const amazonResponse = await axios.get(
            'https://api.your-amazon-api-endpoint.com/search?keywords=${productName}&api_key=YOUR_AMAZON_API_KEY'
        );

        // Call Flipkart API (replace 'YOUR_FLIPKART_API_KEY' with your actual key)
        const flipkartResponse = await axios.get(
            'https://api.your-flipkart-api-endpoint.com/search?query=${productName}&apiKey=YOUR_FLIPKART_API_KEY'
        );

        // Process the API responses and save data to MongoDB
        const amazonProductData = amazonResponse.data;
        const flipkartProductData = flipkartResponse.data;

        // Assuming both APIs return 'name' and 'price' fields
        const amazonProduct = new Product({
            name: amazonProductData.name,
            price: amazonProductData.price,
            platform: 'amazon',
            // Add more fields as needed
        });

        const flipkartProduct = new Product({
            name: flipkartProductData.name,
            price: flipkartProductData.price,
            platform: 'flipkart',
            // Add more fields as needed
        });

        await amazonProduct.save();
        await flipkartProduct.save();

        res.json({ message: 'Products added successfully', products: [amazonProduct, flipkartProduct] });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});