var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {

    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);


    //ROUTE FOR POSTING TO SIGNIN 
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
    
        failureRedirect: '/signin'
    }));

    //dashboard route handler checks if user is signed in
    app.get('/dashboard', isLoggedIn, authController.dashboard);

    app.get('/logout', authController.logout);

   
 

    //ROUTE FOR POSTING DATA. USING PASSPORT METHOD AS A PARAMETER
    app.post('/signup', passport.authenticate('local-signup', {
        //On sign-in redirect to the dashboard handlebars page
        successRedirect: '/dashboard',
        //On failure to sign-in redirect to sign-up page 
        failureRedirect: '/signup'
    }));

    
    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/signin');

    }


}