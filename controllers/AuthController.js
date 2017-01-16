module.exports = function(passport) {
    var module=[];

    module.isAuthenticated = function (req, res, next) {

        if (req.isAuthenticated())
            return next();

        res.send(403, { message: "Permission denied" });
    };

    module.login = function(req, res) { passport.authenticate('login', function(err, user, info) {
        res.send(200,user);
    })(req, res)};

    module.signup = function(req, res) { passport.authenticate('signup', function(err, user, info) {
        res.send(200,user);
    })(req, res)};

    module.getCurrentUser = function(req, res){
        res.send(200, req.user );
    };

    module.logout = function(req, res) {
        req.logout();
        res.json('déconnexion');
    };

    return module;
};
