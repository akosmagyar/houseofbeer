const mongoose = require('mongoose');
const express = require('express');
require('../models/user.model');

const router = express.Router();
const User = mongoose.model('user');

router.post('/register', function (req, res) {
    let user = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role,
        experience: req.body.experience,
        xp: 0
    });
    console.log(`User to be registered: ${user}`);

    user.save()
        .then((user, error) => {
            if (user) {
                console.log(`Successfully registered user ${user.name}.`);
                res.status(200).send(user);
            }
            res.status(500).send(error);
        })
        .catch(reason => {
            console.log(`Registration failed: ${reason}`);
            res.status(500).send(`Could not save user ${user}: ${reason}`);
        });
});

module.exports = router;