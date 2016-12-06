var router 			 = require('express').Router();
var bcrypt 	 	  	 = require('bcrypt-nodejs');
var bodyParser 		 = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});
var jsonParser 		 = bodyParser.json();
var users  			 = require('.././models/users');
		
router.post('/signup',  urlencodedParser, jsonParser, function(req,res){
	var rawPw = req.body.newPassword;
	var user_letter = {};
	var picture = req.body.name.charCodeAt(0);
	// console.log (picture);
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
					email:     req.body.newEmail,
					name:      req.body.name,
					password:  hash,
					comment:   undefined,
					picture:   picture
					// bill_vote: undefined
				});



				_newUser.save(function(err){
					if(err){
						console.log('user signup err');
						console.log(err);
						res.status(400)
							.json({err:err})
					} else{
						console.log('saving user');
						// delete _newUser.password;
						res.json(_newUser)
					}
				})
			}
		})
	})

});

router.get("/getUsers", function(req,res){
		// console.log(req.body);
		// console.log(res.body);

		users.find({}, function(err,users){
			if (err){
				console.log(err);
				res.status(400)
					.json({err:err});
			} else{
				res.json(users);
			}
		})
});

module.exports = router;