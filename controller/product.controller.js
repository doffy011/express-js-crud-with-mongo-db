const product = require('../model/product.model');

exports.createProduct = async (req, res) => {
    try {
        const newProduct =await product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};