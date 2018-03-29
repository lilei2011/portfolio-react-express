const mongoose = require('mongoose');

let Message = mongoose.model('Message', {
	name: {
		type: String,
		trim: true
	},
	email: {
		type: String,
		trim: true
	},
	messageBody: {
		type: String,
		trim: true, 
		required: true
		
	}
});

module.exports  = {Message};