/**
 * Author : Edouard Germain
 *
 * authentification's functions : loggin, signup, isauthenticated, loggout, getCurrentUser
 *
 */

module.exports = function(passport) {
    var module=[];

    module.isAuthenticated = function (req, res, next) {

        if (req.isAuthenticated())
            return next();

        res.send(403, { message: "Permission denied" });
    };

    module.login = function(req, res) { passport.authenticate('login', function(err, user, info) {
        if(err){
            res.send(500,err);
        }
        else if(!user){
            res.send(400,info);
        }
        else{
            res.send(200,user);
        }

    })(req, res)};

    module.signup = function(req, res) { passport.authenticate('signup', function(err, user, info) {
        if(err){
            res.send(500,err);
        }
        else if(!user){
            res.send(400,info);
        }
        else{
            res.send(200,user);
        }
    })(req, res)};

    module.getCurrentUser = function(req, res){
        res.send(200, req.user );
    };

    module.logout = function(req, res) {
        req.session.destroy();
        req.logout();
        res.cookie("connect.sid", '', {expires: new Date(0)});
        res.send(200, {message:"logout"});
    };

    return module;
};
