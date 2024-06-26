const Product = require('../models/Product');
const { isValidObjectId } = require('mongoose');

const getProductsByIds = async (req, res) => {
  try {
    const { ids } = req.query;
    if (!ids) {
      return res.status(400).json({ error: 'IDs parameter is required' });
    }

    const idsArray = ids.split(',');
    if (!idsArray.every(id => isValidObjectId(id))) {
      return res.status(400).json({ error: 'Invalid ObjectId in IDs parameter' });
    }

    const products = await Product.find({ _id: { $in: idsArray } }).exec();
    if (!products || products.length === 0) {
      return res.status(404).json({ error: 'No products found with the provided IDs' });
    }

    res.json(products);
  } catch (error) {
    console.error('Error fetching products by IDs:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find().exec();
        res.json(allProducts);
    } catch (error) {
        console.error('Error fetching all products:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const saveProduct = async (req, res) => {
    try {
        const productData = req.body;
        const product = new Product(productData);
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getProductsByIds,
    getAllProducts,  
    saveProduct
};
