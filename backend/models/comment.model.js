const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	
	userId: {type: mongoose.Schema.Types.ObjectId},
    text: {type: String, required: true},

});

mongoose.model('comment', commentSchema);