var router 			 = require('express').Router();
var billComment 	 = require('.././models/billComment');
//var bill             = require('.././models/bill')
var bodyParser 		 = require('body-parser');
var jwt				 = require('jsonwebtoken');
var urlencodedParser = bodyParser.urlencoded({extended: true});
var jsonParser 		 = bodyParser.json();
var user 	 		 = require('.././models/users');

router.post('/billComment', urlencodedParser, jsonParser, function (req,res) {
	// console.log(req.body);

	var bill_id = req.body.commentPkg.billId;
	var comment = req.body.commentPkg.comment;
	var token   = req.body.commentPkg.token;

	// console.log(comment);

	jwt.verify(token, 'expropositovivo', function(err, decoded){
		// console.log(decoded.email);
		var userEmail = decoded.email;

		user.findOne({"email": userEmail}, 'name', function(err, name){
			// console.log(name);

			// var _billComment={
			// 	comment: comment,
			// 	bill_id: bill_id,
			// 	user_email: userEmail,
			// 	user_name:  name.name
			// };

			// bill.findOneAndUpdate({"id":bill_id}, {$set:{comments: _billComment}}, {new:true}, function(err, item){
			// 	console.log(item);
			// 	if (err){
			// 		return console.log(err);
			// 	} else{
			// 		// console.log(item)
			// 		res.status(200);
			// 		// console.log("___");
			// 		// console.log(item);
			// 		// return  res.send(item);
			// 	}
			// });

			var _billComment = billComment({
				comment:    comment,
				bill_id:    bill_id,
				user_email: userEmail,
				user_name:  name.name
			});
			// console.log(_billComment);

			_billComment.save(function(err){
				if(err){
					console.log(err);
					res.status(400)
						.json({err:err})
				} else{
					res.send(_billComment);
				}
			})
				

		})


	})


})

module.exports = router;