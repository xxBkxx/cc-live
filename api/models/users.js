var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	name: String,
	password: String,
	comment: String
});

userSchema.pre('save', function(next){
	var currentDate = new Date();
	this.created = currentDate;
	if (!this.created){
		this.create = currentDate;
	}
	next();
})

var user = mongoose.model('user', userSchema);

module.exports = user;


 