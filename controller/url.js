const mongoose = require('mongoose');
const shortid = require('shortid');
const validUrl = require('valid-url');
const Url = require('../model/Url');

// USE : To make short URL from longer one
// ROUTE : POST /
// ACCESS :  PUBLIC
exports.poketify = async (req, res, next) => {
    const { longUrl } = req.body;
    const baseUrl = process.env.BASE_URL;
    // check if baseUrl is valid
    if (!validUrl.isUri(baseUrl)) {
        return res.status(500).json({
            success: false,
            data: 'Internal Server Error : Invalid base URL'
        });
    }
    // check if the longUrl is valid
    if (!validUrl.isUri(longUrl)) {
        return res.status(400).json({
            success: false,
            data: 'Invalid URL'
        });
    }
    try {
        // check if record is in db
        const url = await Url.findOne({ longUrl });
        if (url) {
            return res.status(200).json({
                success: true,
                data: url
            });
        } else {
            // generate the short code
            const code = shortid.generate();
            // generate shortUrl
            const shortUrl = `${baseUrl}/${code}`;
            const url = await Url.create({ longUrl, shortUrl, code });
            res.status(201).json({
                success: true,
                data: url
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            data: 'Internal server error!'
        });
    }
}

// USE : To REDIRECT user when short url is entered
// ROUTE : POST /:code
// ACCESS :  PUBLIC
exports.redirect = async (req, res, next) => {
    const url = await Url.findOne({ code: req.params.code });
    if (!url) {
        return res.status(400).json({
            success: false,
            data: 'Invalid Pocket URL'
        });
    }
    res.redirect(url.longUrl);
}
