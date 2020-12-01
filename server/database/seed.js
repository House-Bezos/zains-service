/* eslint-disable no-unused-vars */

const mongoose = require('mongoose');
const faker = require('faker');
const { Product } = require('./index');

for (let i = 0; i < 100; i += 1) {
  const imageArray = [];
  const randomLEN = Math.floor(Math.random() * Math.floor(7)) + 1;
  for (let j = 0; j < randomLEN; j += 1) {
    const randomIMG = Math.floor(Math.random() * Math.floor(50));
    imageArray.push(`https://zainfecservice.s3.amazonaws.com/Random+Images/${randomIMG}.jpg`);
  }
  const product = new Product({
    _id: i,
    productName: faker.commerce.productName(),
    images: imageArray,
  }).save((result) => {
    if (i === 100) {
      mongoose.disconnect();
    }
  });
}
