// Home Route
exports.home = function(req, res) {
    res.render('home');
};

exports.login = function( req,res){
    res.render('login');
};

exports.signers = function (req,res){
    res.render('signers');
};

exports.sign = function(req,res){
    res.render('sign');
};

exports.profile = function(req,res){
    res.render('profile');
};

exports.thanks = function(req,res){
    res.render('thanks');
};
