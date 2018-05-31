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

  app.get("/", function(req, res) {
      res.render('landing', {layout: 'access'});
  });

  //gets sign-up page 
  //app.get("/signup", function(req, res) {
    //res.render('signup', {layout: 'access'});
  //});

  //gets sign-in page
  //app.get("/signin", function(req,res){
    //res.render('signin', {layout: ''});
  //})


  app.use('/wishlist', function (req, res) {

    db.Beer.create(
      {
        //console.log(req.user.id)
        user: 'Sculpin',
        beerType: 'IPA',
        rating: '4',
        wishList: '2',
      },
      db.user.addBeer(db.Beer, { through: { status: 'started' } })
    )

    //db.Beer.create(data);


  })

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
    
  });

  app.post("/api/wishlist", function (req, res) {
    //console.log(req.user.id)
    req.body.userID = req.user.id;
    console.log(req.body);

    db.wishlist1.create(req.body
      //req.body.address,
      //req.body.userID
      //address: req.body],
      //userID: req.user.id,
      //rbBrewId: req.body],
      //url: req.body,
      //brewery: req.body


    );



  });

  function ensureAuthenticated(req, res) {
    if (req.isAuthenticated())
      console.log("this is true");
    else {
      res.redirect('/signin')
    }

  }

}






