const mongoose = require('mongoose');
const express = require('express');
require('../models/comment.model');

const Comment = mongoose.model('comment');
const User = mongoose.model('user');
const router = express.Router();

function resolveUserByName(name) {
    if (!name) {
        return Promise.reject('Username must be defined.');
    }
    console.log(`Resolving user ID from name ${name}...`);
    return User.findOne({name: name});
}

router.post('/', (req, res) => {
    console.log(req.body);
    resolveUserByName(req.body.user)
        .then(user => new Comment({user: user.id, text: req.body.text}).save())
        .then(comment => {
            console.log(comment);
            res.status(200).send(comment);
        })
        .catch(reason => {
            res.status(500).send(reason);
        });
});

router.get('/:username', (req, res) => {
    let username = req.params.username;
    resolveUserByName(username)
        .then(user => Comment.find({user: user.id}))
        .then((comments, error) => {
            if (comments) {
                console.log(`Found ${comments.length} comments posted by ${username}.`);
                res.status(200).send(comments);
            }
            else {
                console.log('Comments could not be found: ' + error);
                res.status(404).send(error);
            }
        })
        .catch(reason => {
            console.log('Failed to retrieve comments: ' + reason);
            res.status(500).send(reason);
        });
});

module.exports = router;