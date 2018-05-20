var exports = module.exports = {}
 

//EXPORTING USER INPUT FOR SIGNING UP
exports.signup = function(req, res) {
 
    res.render('signup');
 
}
//EXPORTING USER INPUT FOR SIGNING IN
exports.signin = function(req, res) {
 
    res.render('signin');
 
}