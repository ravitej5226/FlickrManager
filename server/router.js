const express = require('express');

const authController=require('./controllers/AuthController');
var flickrRouter = express.Router();
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

var router = function () {
  flickrRouter.get('/', function (req, res) {
    require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
    var Flickr = require("flickrapi");
    var flickrOptions = {
      api_key: process.env.FLICKR_API_KEY,
      secret: process.env.FLICKR_SECRET,
      user_id: process.env.FLICKR_USER_ID,
      access_token: process.env.FLICKR_ACCESS_TOKEN,
      access_token_secret: process.env.FLICKR_ACCESS_TOKEN_SECRET
    }
    Flickr.authenticate(flickrOptions,function(err,flickr){
      return authCallback(err,flickr,res);
    });
})
  function authCallback(error,flickr,res){
    
    var flickrOptions = {
      api_key: process.env.FLICKR_API_KEY,
      secret: process.env.FLICKR_SECRET,
      user_id: process.env.FLICKR_USER_ID,
      access_token: process.env.FLICKR_ACCESS_TOKEN,
      access_token_secret: process.env.FLICKR_ACCESS_TOKEN_SECRET,
      authenticated:true
    }
    flickr.photosets.getList(flickrOptions,function(err,results){
     return getPhotosets(err,results,res);
    });
  
  //res.send('Hello World')
  }

  function getPhotosets(err,results,res){
    res.send('Hello World123')
  }

  flickrRouter.get('/auth', authController.authenticate);

  return flickrRouter;
}



module.exports = router();