var router     = require('express').Router();
var bcrypt 	   = require('bcrypt-nodejs');
var bodyParser = require('body-parser');
var users      = require('.././models/users');
var jwt		   = require('jsonwebtoken');

var urlencodedParser = bodyParser.urlencoded({extended: true});
var jsonParser 		 = bodyParser.json();

	router.post('/login',urlencodedParser ,jsonParser, function(req,res){
	// console.log('loggdd in!');
	var _user = req.body;
	// console.log("----");	
	// console.log(_user.password);
	// console.log(_user.email);
	users.findOne({ "email": _user.email}, function(err, user){
		// console.log('auth routes');
		// console.log(user);
		if(err){
			console.log(err)
			res.status(400)
				.json({err:err});
		} else if (!user){
			return 	res.status(401).send({message:'Are you sure you belong here?'});
		}
		else{
			console.log(_user.password + " " + user.password);
			bcrypt.compare(_user.password, user.password, function(err,result){
				// console.log(err);	
				// console.log(_user.password);
				// console.log(result);

				if (result == true){
					// console.log(result);
					users.password = '';
					delete users.password;
					var user_obj = {email: user.email, name: user.name};
					// console.log('user_obj');
					// console.log(user_obj.name);
					var token = jwt.sign(user_obj, 'expropositovivo' );
					res.set('authentication', token);
					res.json(user_obj.name);
					console.log('youre in! :-)');
				} else if (!result){  
					res.status(403)
						.send({message:'youre not allowed in!'});
					console.log('something went wrong');
				}
			});
		}
	});
// users.findOne({"email":_user.newEmail},function(err,user){
// 	// console.log(_user.email);
// 	// console.log(users.password);
// 	if (err){
// 		console.log(err);
// 		res.status(400)
// 			.json({err:err})
// 	} else{
// 		bcrypt.compare(_user.newPassword, users.password, function(err, result){
// 			if (result == true){
// 				console.log(result);
// 				delete users.password;
// 				res.json({email: user.email});
// 				console.log("you're in :)");
// 			} else {
// 				res.status(403)
// 					.json({err:'unauhthorized'});

// 			}
// 		})
// 	}	
// });
// //console.log(user);
});

module.exports = router;