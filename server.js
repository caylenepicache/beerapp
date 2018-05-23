// DEPENDENCIES
var express = require('express');
var bodyParser = require('body-parser');

var db = require('./models');

// CREATE SERVER
var app = express();
var PORT = process.env.PORT || 8080;

// MIDDLEWARE
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// ROUTING
require('./routes/html-routes')(app);


// RUN SERVER
db.sequelize.sync({force: true}).then(function() {
  app.listen(PORT, function() {
    console.log('Server running at http://localhost:' + PORT)
  })
})
