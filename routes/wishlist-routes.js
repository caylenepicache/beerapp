var path = require("path");
var db = require("../models");
var exphbs = require('express-handlebars');



module.exports = function(app) {

    // app.post("/api/wishlist", function(req, res){
    //       db.UserBrewery.create({where}).then(function(dbBrewery) {
    //           console.log(dbBrewery);
    //           res.json(dbBrewery);
    //       })
    // });

    app.get("/wishlist", function(req, res) {
        res.render('landing');
    });







}