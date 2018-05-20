// DEPENDENCIES
var express = require('express');
var db = require('./models');
var app = express();
// DEPENDENCIES HANDLE AUTHENTICATION
var passport = require('passport')
var session = require('express-session')
var bodyParser = require('body-parser');
var env = require('dotenv').load(); 

// CREATE SERVER

var PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//EXPRESS AND PASSPORT SESSION 
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize()); 
app.use(passport.session()); //persists login sessions


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

 
 //  TEST**********************

//


// ROUTING

require('./routes/html-routes')(app);
// app.use(require('./routes/api'))
// app.use(routes);

// RUN SERVER
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log('Server running at http://localhost:' + PORT)
  })
})
