var router 			 = require('express').Router();
var bcrypt 	 	  	 = require('bcrypt-nodejs');
var bodyParser 		 = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});
var jsonParser 		 = bodyParser.json();
var users  			 = require('.././models/users');
		
router.post('/signup',  urlencodedParser, jsonParser, function(req,res){
	var rawPw = req.body.newPassword;
	// var newUser = users({
	// 	email: req.body.email,
	// 	name: req.body.name,
	// 	password: req.body.newPassword,
	// 	bill_vote: undefined
	// })
	bcrypt.genSalt(10, function(err,salt){
		bcrypt.hash(rawPw, salt, null,function(err, hash){
			if (!err){

				
				var _newUser = users({
					email: req.body.newEmail,
					name: req.body.name,
					password: hash,
					bill_vote: undefined
				});

				_newUser.save(function(err){
					if(err){
						console.log(err);
						res.status(400)
							.json({err:err})
					} else{
						// delete _newUser.password;
						res.json(_newUser)
					}
				})
			}
		})
	})

});

module.exports = router;