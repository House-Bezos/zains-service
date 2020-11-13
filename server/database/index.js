const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/FEC');

let productSchema = mongoose.Schema({

  productName: {type: String, required: true}
  images: {[type: String], required: true}

});

let Product = mongoose.model('Product', productSchema);
module.exports.Product = Product