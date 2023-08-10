const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ProductCode: {
        type: String,
    },
    Img:{
        type: String,
    },
    UnitPrice: {
        type: Number,
    },
    Quantity: {
        type: Number,
    },
    TotalPrice: {
        type: Number,
    },

},
            { timestamps: true ,VersionKey:false}
    );

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;