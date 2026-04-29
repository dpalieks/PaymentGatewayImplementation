# Instructions on how to run the payment gateway code and replicate the results
## Prerequisites
1. Working Stripe merchant account
2. One product in the Stripe merchant accounts product catalog
3. Downloaded and installed Node.js

## Set Up
1. Download the code
2. Using the .env.example file, set variable values and remove ".example" from the file name
3. In the terminal, run "npm install"

## Testing
1. Run the server by writing "npm start" in the terminal
2. Go to http://localhost:#PORT#/checkout.html in a web browser (where #PORT# is the number added in .env file for this variable)
3. For successful payments, use card number "4242424242424242"
4. For failed payments, use card number "4000000000009995"
5. When finished, press "Ctrl+C" in the terminal to stop the server