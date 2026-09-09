const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
},
{
    timestamps: true   
} 
)
const example_product_model = mongoose.model('example_product', productSchema);
module.exports = example_product_model;