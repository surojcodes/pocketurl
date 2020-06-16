# Pocket URL
> A full stack Javascript URL shortening app using API first approach. 
> API made using Node.js (Express) and MongoDB (mongoose) and frontend using axios

## Usage
Rename config/config.env.env to config/config.env and update the settings values of your own

## Install Dependencies
```
npm install
```

## Run App
```
# In development mode
npm run dev

#In production mode
npm start
```
##End points
To shorten the URL
```
Request-Type: POST
ROUTE: http://yourdomain.com/
Headers: {
    Content-Type:application/json
}
Body: {
    "longUrl":"URL to shorten"
}
```
This gives you a url object with the short code

```
    {
    "success": true,
    "data": {
        "_id": "5ee7352f97f6de10e9bee7e8",
        "longUrl": "submitted long URL",
        "shortUrl": "http://yourdomain.com/ANXD_u8Bf",
        "code": "ANXD_u8Bf",
        "createdAt": "1592210735285",
        "__v": 0
    }
}
```
As seen, send a GET request to "shortURl" to be redirected to the original page.

***
## Features
* Paste the long URL that you want to shorten
* Get the short URL
* Use the short URL to access original page

## FrontEnd
Front end for the API has been coded in ES6+ Javascript using axios for communicating with API

#### Security Features
* NoSQL injection secure
* Security headers has been added
* Cross-site scripting(XSS) secure
* Cross-Origin Resource Sharing (CORS) enabled
* HTTP Param Pollution prevented

***
## Demo
This is live [here](https://pocketifyurl.herokuapp.com/)
* Version **1.0**
* Author **Suroj Maharjan**
