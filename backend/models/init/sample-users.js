const mongoose = require('mongoose');
const User = mongoose.model('user');

function initUserCollection() {
    let users = [
        {name: 'Saddam', password: 'tesztelek', email: 'Saddam@gmail.com', role: 'Reader', xp: 5},
        {name: 'Rengar', password: 'tesztelek', email: 'Rengar@gmail.com', role: 'Reader', xp: 0},
        {name: 'Khazix', password: 'tesztelek', email: 'Khazix@yahoo.com', role: 'Brewer', xp: 200},
        {name: 'Stan Lee', password: 'tesztelek', email: 'Stan Lee@aol.com', role: 'Brewer', xp:100}
    ];

    console.log('Adding user sample data: ' + users);
    bulkSaveUsers(users);
}

function bulkSaveUsers(users) {
    User.create(users)
        .then((users, error) => {
            if (users) {
                console.log(users + ' added.');
            }
            if (error) {
                console.log('Failed to save user: ' + error)
            }
        })
        .catch((error) => {
            console.log('Failed to initialize user collection due to ' + error);
        });
}

module.exports = initUserCollection;