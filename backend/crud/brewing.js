const mongoose = require('mongoose');
const express = require('express');

require('../models/brewing.model');

const Comment = mongoose.model('comment');
const User = mongoose.model('user');
const Brewing = mongoose.model('brewing');
const router = express.Router();

router.post('/start', (req, res) => {
    console.log("Brewing started");
    console.log(req.body)
        new Brewing(req.body).save()
        .then(brewing => {
            console.log(brewing);
            res.status(200).send(brewing);
        })
        .catch(reason => {
            res.status(500).send(reason);
        });
});

router.post('/comment', (req, res) => {
    console.log("Comment has been added");
    Brewing.findOne({_id: req.body.brewingId })
        .then(brewing => {
			let comment = new Comment({userId: req.body.userId, text: req.body.text});
			brewing.comments.push(comment);
			brewing.save()
			.then(comment => {
				console.log(comment);
				res.status(200).send(comment);
			})
			.catch(reason => {
				res.status(500).send(reason);
			});
		})
        
});
router.post('/xp', (req, res) => {
    //console.log(req.body);
    
        User.findOne({_id : req.body.userId})
        .then((user, error) => {
            console.log(error + "this is muh error");
			console.log(user.xp);
			user.xp = user.xp +1;
			
			user.save().then((e,u) => {
				if(e)
					console.log(e);
				if(u)
					console.log(u);
				console.log("sup")
			})
			console.log("fuck " +user.xp);
				res.status(200).send(user);
        })
        .catch(reason => {
            res.status(500).send(reason);
        });
});

router.post('/finish', (req, res) => {
    console.log(req.body);
    Brewing.findOne({_id: req.body.brewingId })
        .then(brewing => {
				quebrewingst.isFinished = true;
				brewing.save();
			}
		)
        .then(brewing => {
            console.log(brewing);
            res.status(200).send(brewing);
        })
        .catch(reason => {
            res.status(500).send(reason);
        });
});

router.get('/comments/:id', function(req, res, next) {
    Brewing.find({_id: req.params.id})
    .then(brewing => {
        
        res.status(200).send(brewing[0].comments);
    });
    
});


router.get('/brewer/:id', function(req, res, next) {
		Brewing.find({brewer: req.params.id})
		.then(brewing => {
			res.status(200).send(brewing);
		});
		
	});


module.exports = router;