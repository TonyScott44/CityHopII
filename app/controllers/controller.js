var passport = require('passport');
var Strategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

var path = require('path');

module.exports = function (app) {

    app.use(passport.initialize());
    app.use(passport.session());



    app.get('/login/google',
        passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

    app.get('/login/google/return',
        passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');
        });

    app.get('/login/facebook',
        passport.authenticate('facebook'));

    app.get('/login/facebook/return',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');
        });
    app.get('/profile',
        require('connect-ensure-login').ensureLoggedIn(),
        function(req, res){
            res.render('profile', { user: req.user });
        });

    app.get('/', function(req, res) {

        if (req.user) {
            res.sendFile(path.join(__dirname + '/../public/memHome.html'));
        } else {
            res.sendFile(path.join(__dirname + '/../public/home.html'));
        }
    });
    app.get('/login', function(req, res) {
        if (req.user) {
            res.sendFile(path.join(__dirname + '/../public/profile.html'));
        } else {
            res.sendFile(path.join(__dirname + '/../public/login.html'));
        }
    });
    app.get('/city', function(req, res) {
        if (req.user) {
            res.sendFile(path.join(__dirname + '/../public/cityMember.html'));
        } else {
            res.sendFile(path.join(__dirname + '/../public/cityNon.html'));
        }

    });

    app.get('/logout', function(req, res){
        req.logout();
        res.redirect('/');
    });

};