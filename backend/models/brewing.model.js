const mongoose = require('mongoose');

const brewingSchema = new mongoose.Schema({
    name: {type: String, required: true},
	story : {type: String, required: true},
	level: {type: Number, required: true},
    users: {type: [mongoose.Schema.Types.ObjectId]},
    comments: {type: [mongoose.Schema.Types.comment], required: true},
	brewer: {type: mongoose.Schema.Types.ObjectId},
	isFinished: {type: Boolean}
});

mongoose.model('brewing', brewingSchema);

const config = require('../config');
if (config.db.importSampleData) {
    require('./init/sample-brewings')();
}
