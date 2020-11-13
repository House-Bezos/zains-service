const {Product} = require('./index');
const mongoose = require('mongoose');
const faker = require('faker');

mongoose.connect('mongodb://localhost/FEC');

for (var i = 0; i < 100; i++) {
  var imageArray = []
  for (var j = 0; j < 7; j++) {
    imageArray.push(faker.image.imageUrl())
  }
  var product = new Product({
    productName: faker.commerce.productName(),
    images: imageArray
  }).save((err, result) => {
    if (i === 100) {
      exit();
    }
  })

}

function exit() {
  mongoose.disconnect();
}
