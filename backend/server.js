const config = require('./config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const userAuth = require('./auth/user-auth');
const cors = require('cors');
const session = require('express-session');

const app = express();

mongoose.connect(config.db.url)
    .then(() => console.log(`Established connection with MongoDB instance at ${config.db.url}.`))
    .catch(reason => console.log(reason));

app.use(cors());
app.use(bodyParser.urlencoded({'extended': 'true'}));
app.use(bodyParser.json({'extended': 'false'}));

var dbURI = '';
/*
var connect = function () {
    //const db = require('monk')('mongo:27017/');
    const db = require('monk')('mongodb://127.0.0.1:27017/');
    db.then(function () {
        console.log("connected");
    }).catch(function () {
        // sometimes node starts before mongo, so we have to reconnect in case of error
        connect();
    });
};
connect();
*/
app.use(session({
    secret: config.auth.sessionSecret
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(userAuth.strategy);
passport.serializeUser(function (user, done) {
    done(null, user);
});
passport.deserializeUser(function (user, done) {
    done(null, user);
});

app.use('/user', require('./crud/user'));
app.use('/comment', require('./crud/comment'));
app.use('/brewings', require('./crud/brewing'));
app.use('/auth', userAuth.router);

app.listen(config.backend.port);
console.log(`House of Beer hosted at http://${config.backend.host}:${config.backend.port}`);
