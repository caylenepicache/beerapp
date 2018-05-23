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
 
    res.render('dashboard');
 
}
exports.logout = function(req, res) {
 
    req.session.destroy(function(err) {
 
        res.redirect('/signin');
 
    });
 
}