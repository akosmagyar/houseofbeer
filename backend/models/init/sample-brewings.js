const mongoose = require('mongoose');
 
//require('../models/brewing.model');

Brewing = mongoose.model('brewing');
User = mongoose.model('user');

function bulkSave(brewings) {
    console.log('Adding brewings sample data: ' + brewings);
    Brewing.create(brewings)
        .then((brewings, error) => {
            if (brewings) {
                console.log(brewings + ' added.');
            }
            if (error) {
                console.log('Failed to save brewings: ' + error)
            }
        })
        .catch((error) => {
            console.warn('Failed to initialize user collection due to ' + error);
        });
}

function initBrewingsCollection() {
    const numberOfUsers = 3;
    User.findOne({role: "Brewer"}, function (error, Brewer) {
        if (Brewer) {
            console.log('Brewer could not be found.');
            console.log('Brewer found: ' + Brewer);
            User.find({role: "player"}).limit(numberOfUsers).exec()
                .then((manyUsers, error) => {
                    let extractedUserIds = manyUsers.map(e => e.id);
                    let brewings = [
                        {
                            name: 'Sample brewing #1',
                            story: 'Description goes here, like settings and goals.',
                            level: 5,
                            users: extractedUserIds,
                            Brewer: Brewer.id
                        },
                        {
                            name: 'Sample brewing #2',
                            story: 'Description goes here, like setting and goals.',
                            level: 2,
                            users: extractedUserIds,
                            Brewer: Brewer.id,
                            isFinished: true
                        }
                    ];
                    bulkSave(brewings);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    });
}

module.exports = initBrewingsCollection;