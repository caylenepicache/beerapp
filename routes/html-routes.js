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
  app.get("/", function (req, res) {
    res.render('landing');
  });

  //gets sign-up page
  app.get("/signup", function (req, res) {
    res.render("signup");

  });

  //gets sign-in page
  app.get("/signin", function (req, res) {
    res.render("signin");
  })


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
    console.log(req.user);
  });


  app.post("/api/wishlist", function (req, res) {
    console.log(req.body[0]);


    db.wishlist1.create(req.body
      //address: req.body[1],
      //userID: req.user.id,
      //rbBrewId: req.body[3],
      //url: req.body[0],
      //brewery: req.body[2]


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






