const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const urlRouter = require('./routes/url');

// configure environment variables
dotenv.config({ path: './config/config.env' });

// create express app
const app = express();

// for req.body
app.use(express.json());

// connect to mongodb
connectDB();

// mount the router
app.use('/', urlRouter);


// listen to a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    if (err) {
        console.error(`Something went wrong with server initialization.. ${err}`);
        return;
    }
    console.log(`Server Started on Port ${PORT}`);
});