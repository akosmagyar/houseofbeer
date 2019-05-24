const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: {type: String},
    role: {type: String, enum: ['Reader', 'Brewer']},
    experience: {type: String},
    xp: {type: Number}
});

userSchema.methods.comparePassword = function (password, next) {
    bcryptjs.compare(password, this.password, function (error, match) {
        next(error, match);
    })
};

userSchema.pre('save', function (next) {
    let user = this;
    if (user.isNew || user.isModified('password')) {
        bcryptjs.genSalt(10, function (error, salt) {
            if (error) return next(error);
            bcryptjs.hash(user.password, salt, function (error, hash) {
                if (error) return next(error);
                user.password = hash;
                next();

            })
        });
    }
    else {
        next();
    }
});

mongoose.model('user', userSchema);

const config = require('../config');
if (config.db.importSampleData) {
    require('./init/sample-users')();
}
