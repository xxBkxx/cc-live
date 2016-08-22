var users    = require('./models/user');
var bcrypt   = require('bcrypt');
var router   = require('express').Router();

router.post('/signup', function (req,res){
	var newUser = req.body;
	bcrypt.hash(newUser.password, salt, function(err, hash){
		if (err){
			newUser.password = hash;
			var _newUser = User(newUser);
			_newUser.save(function(err){
				if (err){
					console.log(err);
					res.status(400);
						.json({err:err})
					} else {
						delete _newUser.password;
						res.json(_newUser);
					}
				}
			})
		}
	})
})

router.post('/login',function(req,res){
	var __user = req.body;
	User.findOne({"email":__user.email},function(err,user){
		if(err){
			console.log(err);
			res.status(400)
			   .json({err:err})
		} else {
			bcrypt.compare(__user.password, user.password, function(err, result) {
			    if(result==true){
					delete user.password;
					res.json({email: user.email});
				} else {
			    	res.status(403)
			    		.json({err:'unauhthorized'});
			}
		}
	});
});
