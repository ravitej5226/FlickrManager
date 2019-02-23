const express = require('express');

var flickrRouter = express.Router();
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })


var AuthController=function(){
    var authentication=function(req,res){
        var Flickr = require("flickrapi"),
      flickrOptions = {
        api_key: process.env.FLICKR_API_KEY,
      secret: process.env.FLICKR_SECRET
      };

    Flickr.authenticate(flickrOptions, function (error, flickr) {
      // we can now use "flickr" as our API object
        // Do nothing
    });

    }

    return{
        authenticate:authentication
    };
}

module.exports= AuthController();