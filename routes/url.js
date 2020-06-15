const express = require('express');
const { poketify, redirect } = require('../controller/url');

const router = express.Router();

//to shorten url
router.post('/', poketify);

//to redirect when short url is clicked
router.route('/:code').get(redirect);

module.exports = router;