var isAuthenticated = function (req, res, next) {

    if (req.isAuthenticated())
        return next();

    res.json('veuillez vous auth');
}
module.exports = function(app,passport) {

    app.post('/login', passport.authenticate('login', {
        successRedirect: '/home',
        failureRedirect: '/'
    }));
    app.post('/signup', passport.authenticate('signup', {
        successRedirect: '/home',
        failureRedirect: '/'
    }));
    app.get('/home', isAuthenticated, function(req, res){
        res.json( req.user );
    });
    app.get('/logout', function(req, res) {
        req.logout();
        res.json('déconnexion');
    });



};



