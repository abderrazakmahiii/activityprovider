const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Endpoint for getting parameters
app.get('/parameters', (req, res) => {
  res.send('Parameters');
});

// Endpoint for setting parameters
app.post('/parameters', async (req, res) => {
  console.log('Updating parameters');
  res.send('Parameters updated');
});

module.exports = app;