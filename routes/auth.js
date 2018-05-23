var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {
    //dashboard route handler checks if user is signed in
    app.get('/dashboard',isLoggedIn, authController.dashboard);

    //
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/logout', authController.logout);
    
    //ROUTE FOR POSTING DATA. USING PASSPORT METHOD AS A PARAMETER
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard',
        failureRedirect: '/signup'
    }));
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }

}