#!/usr/bin/env node
// 10-api/api.js
const express = require('express');
const app = express();

// Middleware to parse JSON bodies in POST requests
app.use(express.json());

// Existing root route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

// New route for cart/:id
app.get('/cart/:id', (req, res) => {
  const cartId = req.params.id;

  if (/^\d+$/.test(cartId)) {
    res.status(200).send(`Payment methods for cart ${cartId}`);
  } else {
    res.status(404).send('Not Found');
  }
});

// New route for available_payments
app.get('/available_payments', (req, res) => {
  res.status(200).json({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

// New route for login
app.post('/login', (req, res) => {
  const { userName } = req.body;

  if (userName) {
    res.status(200).send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Bad request');
  }
});

// Start the server on port 7865
app.listen(7865, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
