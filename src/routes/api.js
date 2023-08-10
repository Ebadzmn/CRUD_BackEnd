const express = require('express');
const router = express.Router();


const { createProduct, getAllProducts, updateProduct, deleteProduct, getProductById } = require('../controller/ProductController');



//Create Product
router.post ('/createProduct', createProduct);

//Get all Products
router.get('/getAllProducts', getAllProducts);

//Update Product
router.put('/updateProduct/:id', updateProduct);

//Delete Product
router.delete('/deleteProduct/:id', deleteProduct);

//ReadById
router.get('/getProductById/:id', getProductById);










module.exports = router;