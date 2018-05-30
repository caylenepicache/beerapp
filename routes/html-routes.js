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
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads landing page for signing up or signing in.
  app.get("/", function(req, res) {
      res.render('landing');
  });

  //gets sign-up page
  app.get("/signup", function(req, res) {
    res.render("signup");

  });

  //gets sign-in page
  app.get("/signin", function(req,res){
    res.render("signin");
  })


  // cms route loads cms.html
  // app.post("/api/breweries/", function(req, res) {
  //   db.User.create(req.body).then(function(data) {
  //     res.json(data);
  //   });
  // });

  // blog route loads blog.html

    app.get("/wishlist", function(req, res) {
      res.render('wishlist');
  });
  

  app.get("/api/wishlist", function(req, res) {
    db.sdbreweries.findOne(
      {
        where: {
          breweryid: req.data-id
        }
    }).then(function(data){
    console.log(data);
  });
});

  // app.get("/beers", function(req, res) {

    
  // });

  // authors route loads author-manager.html
  // app.get("/authors", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  // });


};

