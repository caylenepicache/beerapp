

var db = require("../models");

module.exports = function(app) {

    app.post("/api/wishlist", function(req, res){
          db.UserBrewery.create(req.body).then(function(dbBrewery) {
              console.log(dbBrewery);
              res.json(dbBrewery);
          })
    })







}