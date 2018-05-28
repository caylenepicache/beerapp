var exports = module.exports = {}

//EXPORTING USER INPUT FOR SIGNING UP
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
//EXPORTING USER INPUT FOR SIGNING IN
exports.signin = function(req, res) {
 
    res.render('signin');
 
}
 //EXPORTING DASHBOARD INFORMATION FOR USER
 exports.dashboard = function(req, res) {
 
    // res.render('dashboard');
    res.sendFile(path.join(__dirname, "../views/dashboard.html"));
 
}


 

//LOGS USER OUT AND REDIRECTS TO SIGNIN PAGE
exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        // res.redirect('/signin');
        console.log(req.user + " you are signed out");
 
    });
 
}