var searchController = require('../controllers/searchcontroller.js');

module.exports = function (app) {

    app.post('/search', searchController.searchToApi);
    //dashboard route handler checks if user is signed in



}