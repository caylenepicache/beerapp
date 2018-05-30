var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {

    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);


    app.post('/signin',passport.authenticate('local-signin'),function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    // successRedirect: '/dashboard';
    if(req.user !==null){
        res.redirect('/dashboard');
        console.log(req.user);
    }
    else{
        res.redirect('/signin')
      //  failureRedirect: '/signin';
    }
    
  });
    //ROUTE FOR POSTING TO SIGNIN 
    /*app.post('/signin', passport.authenticate('local-signin', {
    
    
        successRedirect: '/dashboard',
    
        failureRedirect: '/signin'
    }));
    */

    //dashboard route handler checks if user is signed in
    app.get('/dashboard', isLoggedIn, authController.dashboard);

    app.get('/signout', authController.logout);

   
 

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