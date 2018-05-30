require('dotenv').config();
// DEPENDENCIES
var express = require('express');
var app = express();



var exphbs = require('express-handlebars');
// DEPENDENCIES HANDLING AUTHENTICATION

var passport = require('passport');
var session = require('express-session');


var bodyParser = require('body-parser');
var env = require('dotenv').load(); 
console.log("ratebeer id" + process.env.RATEBEER_ID);

//var models = require("./models");
var db = require('./models');
var keys = require('./keys');
console.log("ratebeer id from keys: " + keys.ratebeer.id);






// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());


//EXPRESS AND PASSPORT SESSION 
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize()); 
app.use(passport.session()); //persists login sessions

//HANDLEBARS
app.engine('handlebars', exphbs({ defaultLayout: 'main', extname: 'handlebars' }));
app.set('view engine', 'handlebars');
app.set('views', './views')


//add passport as a parameter
var authRoute = require('./routes/auth.js')(app, passport); 
var search = require('./routes/search.js')(app);

var exphbs = require('express-handlebars')

// CREATE SERVER

var PORT = process.env.PORT || 8080;

//LOAD PASSPORT STRATEGIES

require('./config/passport/passport.js')(passport, db.user);


// ROUTING
require('./routes/html-routes')(app);



// RUN SERVER/ SYNC DATABASE
db.sequelize.sync().then(function() {
  app.listen(PORT, function(err) {
    if(!err)
    console.log('Server running at http://localhost:' + PORT);
    else console.log("There is an error with connecting" + err);
  })
})
