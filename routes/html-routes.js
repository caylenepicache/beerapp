//change according to beer app

// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var db = require("../models")
// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(data){
      res.render('main', { User: data });
    });
  });


  // cms route loads cms.html
  app.post("/api/breweries/", function(req, res) {
    db.User.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
  
    
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });


};

