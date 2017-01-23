var User = require('../models/User.js');
var bCrypt = require('bcrypt-nodejs');
var LocalStrategy   = require('passport-local').Strategy;

module.exports = function(passport){

    var createHash = function(password){
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };

    var isValidPassword = function(user, password){
        return bCrypt.compareSync(password, user.password);
    };

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.Model.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('login', new LocalStrategy({
            passReqToCallback : true
        },
        function(req, username, password, done) {
            User.Model.findOne({ 'username' :  username }, '+password',
                function(err, user) {
                    if (err)
                        return done(err);
                    if (!user){
                        console.log('User Not Found with username '+username);
                        return done(null, false, {message:"User Not Found"});
                    }
                    if (!isValidPassword(user, password)){
                        console.log('Invalid Password');
                        return done(null, false, {message:"Invalid Password"});
                    }
                    req.logIn(user, function(err) {
                        if (err) { return next(err); }
                        user = user.toObject();
                        delete user.password;
                        return done(null, user);
                    });

                }
            );

        })
    );

    passport.use('signup', new LocalStrategy({
            passReqToCallback : true // allows us to pass back the entire request to the callback
        },
        function(req, username, password, done) {

            findOrCreateUser = function(){
                User.Model.findOne({ 'username' :  username }, function(err, user) {
                    if (err){
                        return done(err);
                    }
                    if (user) {
                        return done(null, false,{message:"User already exists"});
                    } else {
                        var newUser = new User.Model();

                        newUser.username = username;
                        newUser.password = createHash(password);
                        newUser.email = req.param('email');

                        newUser.save(function(err) {
                            if (err){
                                return done(err);
                            }
                            else {
                                newUser = newUser.toObject();
                                delete newUser.password;
                                return done(null, newUser);
                            }
                        });
                    }
                });
            };
            process.nextTick(findOrCreateUser);
        })
    );
};