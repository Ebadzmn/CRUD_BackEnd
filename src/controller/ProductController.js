const ProductModel =require('../models/ProductsModel');




//Create Product

exports.createProduct = async (req, res) => {
    try {
        const product = await ProductModel.create(req.body);
        return res.status(201).json({
            data: product
        });
    } catch (err) {
        return res.status(500).json({ err: err.message });
    }
}




//Get all Products

exports.getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        return res.status(200).json({
            data: products
        });
    }
    catch (err) {
        return res.status(500).json({ err: err.message });
    }
}

//ReadById

exports.getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        return res.status(200).json({ data: product });
    }
    catch (err) {
        return res.status(500).json({ err: err.message });
    }
}






// Update Product
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const reqBody = req.body;

        // Make sure to set the `new` option to `true` to get the updated document
        const options = { new: true };

        const product = await ProductModel.findByIdAndUpdate(id, reqBody, options);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        return res.status(200).json({ data: product });
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
}






exports.deleteProduct = async (req, res) => {
    try{
        const {id} = req.params;
        await ProductModel.findByIdAndDelete(id);
        return res.status(200).json({ data: 'Product deleted successfully' });
    }
    catch (err) {
        return res.status(500).json({ err: err.message });
    }
}

