const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/FEC');

let productSchema = mongoose.Schema({
  _id: String,
  productName: String,
  images: Array,

});

let Product = mongoose.model('Product', productSchema);
