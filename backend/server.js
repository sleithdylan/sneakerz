// Require Express.js
const express = require('express');
// Initialize Express
const app = express();
// Express Port
const port = 4000;
// Require CORS
const cors = require('cors');
// Require Body Parser
const bodyParser = require('body-parser');
// Require Mongoose
const mongoose = require('mongoose');

// CORS
app.use(cors());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const connectionString =
  'mongodb+srv://root:root@sneakerz.dwluz.mongodb.net/ads?retryWrites=true&w=majority';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true });

const Schema = mongoose.Schema;

// Ad Schema
var adSchema = new Schema({
  name: String,
  image: String,
  description: String,
  brand: String,
  category: String,
  price: Number
});

// "Ad" Model
var Ad = mongoose.model('ad', adSchema);

// @desc Returns JSON of Ads
// @route GET /api/ads
app.get('/api/ads', (req, res) => {
  // Returns Ads
  Ad.find((err, data) => {
    // Returns Ads in JSON format if status is 200
    return res.status(200).json(data);
  });
});

// @desc Returns a specific ad
// @route GET /api/ads/:id
app.get('/api/ads/:id', (req, res) => {
  console.log(req.params.id);

  // Find ad by ID
  Ad.findById(req.params.id, (err, data) => {
    res.json(data);
  });
});

// @desc Updates a specific ad
// @route PUT /api/ads/:id
app.put('/api/ads/:id', (req, res) => {
  console.log('Update Ad: ' + req.params.id);
  console.log(req.body);

  // Finds ad by ID and updates it
  Ad.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, data) => {
    res.send(data);
  });
});

// @desc Returns Ad name, price, image, brand, category & description to server
// @route POST /api/ads
app.post('/api/ads', (req, res) => {
  console.log('Ad Placed!');
  console.log(req.body.name);
  console.log(req.body.price);
  console.log(req.body.image);
  console.log(req.body.brand);
  console.log(req.body.category);
  console.log(req.body.description);

  // Inserts data into database
  Ad.create({
    name: req.body.name,
    image: req.body.image,
    description: req.body.description,
    brand: req.body.brand,
    category: req.body.category,
    price: req.body.price
  });

  // Returns "Ad Placed"
  res.send('Ad Placed');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
