//change according to beer app

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models");
var exphbs = require('express-handlebars');
// Routes
// =============================================================
module.exports = function (app, passport) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads landing page for signing up or signing in.


  //Renders the landing page
  app.get("/", function(req, res) {
      res.render('landing', {layout: 'access'});
  });

  

  app.get('/retrievedata', function (req, res) {
    db.Beer.findAll({
      include: [{
        model: db.user
      }]
    }) 
      .then(function (Beer) {
        res.render('wishlist', { Beer: Beer })
      })
      .catch(function (err) {
        res.json(err)
      })
  });





  app.get("/wishlist", function (req, res) {
      res.render('wishlist', {layout: 'main'}); 
  });
  
//   app.get("/retrieveWishlist", function (req, res) {
 /*var query = {};
  if(req.user.id !== null){
    query.userID = req.user.id
    }
    db.wishlist1.findAll({
      where: query,
      attributes: [/*'address', 'userID', 'rbBrewid', 'url', 'brewery'],
    })
   .then(function(dbWishlist){
     console.log(dbWishlist);
     
      
      })
*/

//   db.wishlist1.findAll({
//     where:{ 
//      userID: req.user.id }
//     //attributes: ['address', 'userID', 'rbBrewid', 'url', 'brewery']
//     }).then(function(dbWishlist){
//    console.log(dbWishlist);
//    console.log("#######################" +dbWishlist.address); 
// })
  
//   })
// >>>>>>> master

  





  
    

  //Posting brewery data into the users wishlist

  app.post("/api/wishlist", function (req, res) {
    req.body.userID = req.user.id;

    db.wishlist1.create(req.body);
  });

function loop(data) {
    for (var i = 0; i < data.length; i++ ) {
      // console.log(data[i].brewery);
      // console.log(data[i].url);

      var array = [];

      array.push(data[i].brewery);
      array.push(data[i].url);
      console.log(array);

      // var object = JSON.parse(data[i].brewery);
      // console.log(object);
      res.render("wishlist", {brewery: array});
      
    }
  }

  app.get("/retrieve", function (req, res){

    db.wishlist1.findAll({
      where: {
        userID: req.user.id,
        visited: false
      }
    }).then(function(data){
      // loop(data);
      console.log(data[0].dataValues.brewery);

      res.render("wishlist", {
        brewery: data
      });
    });

  });   


}






