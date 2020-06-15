const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const urlRouter = require('./routes/url');
const path = require('path');

// security
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// configure environment variables
dotenv.config({ path: './config/config.env' });

// create express app
const app = express();

// for req.body
app.use(express.json());

// connect to mongodb
connectDB();

// static site
app.use(express.static(path.join(__dirname, 'public')));

// mount the router
app.use('/', urlRouter);

// sanitize data
app.use(mongoSanitize());

//set security headers
app.use(helmet());

// prevnt XSS attacks
app.use(xss());

//prevent HTTP param polution
app.use(hpp());

//Enable cors
app.use(cors());

// listen to a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
    if (err) {
        console.error(`Something went wrong with server initialization.. ${err}`);
        return;
    }
    console.log(`Server Started in ${process.env.NODE_ENV} mode on Port ${PORT}`);
});