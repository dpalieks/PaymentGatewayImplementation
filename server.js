require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY); // Replace with your actual Stripe secret key
const express = require('express');
const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 

const PORT = process.env.PORT || 3000; //Replace with your desired port number

const YOUR_DOMAIN = 'http://localhost:' + PORT;

app.post('/create-checkout-session', async (req, res) => {
  const quantity_input = Math.max(1, parseInt(req.body.quantity, 10) || 1);

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: process.env.PRICE_ID,  // Replace with your actual price ID from Stripe
        quantity: quantity_input,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(PORT, () => console.log(`Running on port ${PORT}`));