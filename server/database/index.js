const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/FEC');

const productSchema = mongoose.Schema({
  _id: Number,
  productName: { type: String, required: true },
  images: [String],

});

const Product = mongoose.model('Product', productSchema);

module.exports.Product = Product;
