/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const database = require('./database/index.js');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.urlencoded());

app.get('/api/product/:id', (req, res) => {
  const item = req.params.id;
  database.Product.find({ _id: item }, (err, products) => {
    if (err) {
      console.log('Could not retrieve products');
    } else {
      res.send(products);
    }
  });
});

module.exports = app;
