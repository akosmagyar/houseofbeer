require('../models/user.model');
const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const LocalStrategy = require('passport-local').Strategy;

const router = express.Router();
const User = mongoose.model('user');

let authStrategy = new LocalStrategy(function (username, password, done) {
    console.log('User ' + username + ' being authenticated...');
    User.findOne({name: username}, function (error, user) {
        if (error) {
            console.error(`Error occurred while ${username} attempted to login: ${error}`);
            return done(error);
        }
        if (!user) {
            console.warn(`${username} could not be found.`);
            return done(null, false);
        }

        user.comparePassword(password, function (err, isMatch) {
            if (err) {
                console.log(err);
                return done(err);
            }
            if (isMatch) {
                console.log(`User ${user.username} successfully authenticated as ${user.role}.`);
                return done(null, user);
            }
            console.log("Password do not match.");
            return done(null, false);
        })
    })
});

router.post('/login', function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        console.log('Login attempt for: ');
        console.log(user);
        if (err) {
            console.error('Error during login attempt: ' + error);
            return res.status(500).send();
        }
        if (!user) {
            console.warn('Login attempt failed.');
            return res.status(403).send();
        }
        req.logIn(user, function (err) {
            if (err) {
                return next(err);
            }
            console.log('Successful login.');
            console.log(req.session);
            return res.status(200).send({
                id: req.user.id,                
                name: req.user.name,
                role: req.user.role
            });
        });
    })(req, res, next);
});

router.post('/logout', function (req, res) {
    if (req.isAuthenticated()) {
        console.log('Was authenticated, now logging out...');
        req.logout();
        res.status(200).send('Logout was successful.');
    }
    console.log('Cannot logout, user not authenticated beforehand.');
    res.status(404).send('Not logged in.');
});

module.exports = {
    strategy: authStrategy,
    router: router
};