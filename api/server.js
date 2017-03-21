var express    = require('express');
var bodyParser = require('body-parser');
var app 	   = express();

// var bcrypt     = require('bcrypt-nodejs');
// var fs 		 = require('fs');
// var parse    = require('xml-parser');
// var xml 	 = fs.readFileSync('download.xml', 'utf8');

var inspect  = require('util').inspect;
var mongoose = require('mongoose');

var users    = require('./models/users');
var jwt		 = require('jsonwebtoken');

var authentication = require("./middleware/auth");

var vote_routes    	   	   = require('./routes/vote_routes');
var bill_init_routes       = require('./routes/bill_init_routes');
var bill_routes    	   	   = require('./routes/bill_routes');
var user_routes    	   	   = require('./routes/user_routes');
var auth_routes    	   	   = require('./routes/auth_routes');
var billComment_routes 	   = require('./routes/billComment_routes');
var initBillComment_routes = require('./routes/initComments_routes');
var init_votes			   = require('./routes/init_votes');

app.use('/', initBillComment_routes);
app.use('/', bill_init_routes);
app.use('/', user_routes);
app.use('/', vote_routes);
app.use('/', bill_routes);
app.use('/', auth_routes);
app.use('/', billComment_routes);
app.use('/', init_votes);

//app.use('/vote', authentication, );
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json())

app.use(express.static('../app/'));

mongoose.connect('mongodb://localhost/data/db');
var db 		 = mongoose.connection;
db.on('error', console.error.bind(console, 'connection Error:'));
db.once('open', function(){

	// Drop the db----------------------
	// console.log('Connected to db at /data/db/')
	// mongoose.connection.db.dropDatabase(function (err) {
	//   console.log('db dropped');
	//   // process.exit(0);
	// });
	// ----------------------------
	
});

// mongoose.connection.db.dropDatabase(function (err) {
//   console.log('db dropped');
//   console.log(err);
//   process.exit(0);
// });
// app.get('/')

// app.post('/authenticate',function(req,res){ 
// 	console.log("auth EP");
// });

	// app.post('/login', function(req,res){
	// 	// console.log('loggdd in!');
	// 	var _user = req.body;

	// 	console.log("body");
	// 	console.log(_user);

	// 	// console.log("----");	
	// 	// console.log(_user.password);
	// 	// console.log(_user.email);
	// 	users.findOne({ "email": _user.email}, function(err, user){
	// 		console.log("user");
	// 		console.log(user);
	// 		if(err){
	// 			console.log(err)
	// 			res.status(400)
	// 				.json({err:err});
	// 		} 
	// 		else{
	// 			bcrypt.compare(_user.password, user.password, function(err,result){
	// 				// console.log(err);	
	// 				// console.log(_user.password);
	// 				// console.log(user.password);
	// 				if (result == true){
	// 					// console.log(result);
	// 					delete users.password;
	// 					var user_obj = {email: user.email};
	// 					var token = jwt.sign(user_obj, 'expropositovivo' );
	// 					res.set('authentication', token);
	// 					res.json({email: user.email});
	// 					res.json(user_obj);
	// 					console.log('youre in! :-)');
	// 				} else{  
	// 					res.status(403)
	// 						.json({err:'youre not allowed in!'});
	// 					console.log('something went wrong');
	// 				}
	// 			});
	// 		}
	// 	});
	// // users.findOne({"email":_user.newEmail},function(err,user){
	// // 	// console.log(_user.email);
	// // 	// console.log(users.password);
	// // 	if (err){
	// // 		console.log(err);
	// // 		res.status(400)
	// // 			.json({err:err})
	// // 	} else{
	// // 		bcrypt.compare(_user.newPassword, users.password, function(err, result){
	// // 			if (result == true){
	// // 				console.log(result);
	// // 				delete users.password;
	// // 				res.json({email: user.email});
	// // 				console.log("you're in :)");
	// // 			} else {
	// // 				res.status(403)
	// // 					.json({err:'unauhthorized'});

	// // 			}
	// // 		})
	// // 	}	
	// // });
	// // //console.log(user);
	// });

// app.post('/vote', function(req,res){
// 	console.log("post");
// 	// req.body.yea++;
// 	console.log(req.body.vote.yea);
// 	var currYea = req.body.vote.yea;
// 	var newYea = currYea + 1;
// 	// var userVote   = req.body.yea;
// 	var voteBillId = req.body.vote.bill_id;
// 	console.log(voteBillId);
// 	// var yeaUp = 2;
// 	// var currVal =0;
// 	// bill.findOne({"id":voteBillId},'yea', function(err, doc){
// 	// 	// var billObj = doc.toObject();
// 	// 	// console.log(billObj);
// 	// 	// var currVal = billObj.yea++;
// 	// 	// console.log("____");
// 	// 	// console.log(doc.yea);
// 	// 	// currVal = doc.yea;
// 	// 	// yeaUp = currVal + 1;
// 	// 	// console.log(yeaUp);
// 	// }).lean()
// 	bill.findOneAndUpdate({"id":voteBillId}, {$set:{yea: currYea}}, {new:true}, function(err, item){
// 		// console.log(yeaUp);
// 		if (err){
// 			return console.log(err);
// 		}else{
// 			// console.log(item)
// 			res.status(200);
// 			console.log("___");
// 			console.log(item);
// 			return  res.send(item);
// 		}
// 	})
// 	// bill.findOne({id: voteBillId}, function(err, item){
// 	// 	if(err){
// 	// 		console.log(err)
// 	// 		res.status(400)
// 	// 			.json({err:err});
// 	// 	} else{
// 	// 		if (userVote){

// 	// 			 	var _newVote = item({
// 	// 				yea: userVote;
// 	// 			});
// 	// 			console.log('its yea');
// 	// 		}
			
// 	// 	}
// 	// })
// 	// console.log(userVote);
// });


// app.post('/signup', function(req,res){
// 	var rawPw = req.body.newPassword;
// 	// var newUser = users({
// 	// 	email: req.body.email,
// 	// 	name: req.body.name,
// 	// 	password: req.body.newPassword,
// 	// 	bill_vote: undefined
// 	// })
// 	bcrypt.genSalt(10, function(err,salt){
// 		bcrypt.hash(rawPw, salt, null,function(err, hash){
// 			if (!err){

				
// 				var _newUser = users({
// 					email: req.body.newEmail,
// 					name: req.body.name,
// 					password: hash,
// 					bill_vote: undefined
// 				});
// 				console.log("____________________")
// 				console.log(_newUser.password);

// 				_newUser.save(function(err){
// 					if(err){
// 						console.log(err);
// 						res.status(400)
// 							.json({err:err})
// 					} else{
// 						// delete _newUser.password;
// 						res.json(_newUser)
// 					}
// 				})
// 			}
// 		})
// 	})
// 	// console.log("--------");
// 	// console.log(newUser);
// 	// newUser.save(function(err) {
// 	//     if (err) {
// 	//         console.log(err);
// 	//     } else {
// 	//         console.log('new user created!');
// 	//     }
// 	// });

// });
// app.get('/billWatch', function(req,res){
// 	bill.find({}, function(err, bills){
// 		if (err){
// 			console.log(err);
// 			res.status(400)
// 				.json({err:err});
//  		} else{
//  			res.json(bills);
//  			// console.log("$$$$");
//  			// console.log(bills);
//  		}
//  		// mongoose.connection.close();
// 	});
// });
 
// var object = parse(xml);
// console.log(inspect(object,{ colors: true, depth:7}));
// console.log('////////');
// console.log(object.root.children[1].attributes.id);
// console.log(object.root.children[7].children[9].children[0].children[2].children[0].attributes.relativePath);
// console.log(object.root.children[1].children[10].attributes.laagCurrentStage);
// console.log('////////');

// var id = object.root.children[1].attributes.id;

// for (var i = 0; i < object.length; i++ ){

// }


// Remove Bill
// ______________________
// bill.find().remove({}, callback);
// function callback(){
// 	console.log('callback');
// }
// bill.exec();
// console.log('-----------------');
// console.log(bill);
// console.log('``````````````````')
// db.collections['bills'].remove();
// 	db.collections['bills'].exec();

// console.log('#########')
// console.log(bills);
// console.log('#########')
// ```````````````````````````

// var bill_id 		    = 0;
// var introduced 		    ='';
// var parliament_number   = 0;
// var session 		    = 0;
// var bill_prefix		    ='';
// var bill_number		    = 0;
// var Title			    ='';
// var short_title		    ='';
// var bill_type		    ='';
// var sponsorer_title	    ='';
// var sponsorer_name      ='';
// var sponsorer_party     ='';
// var publications	    ='';
// var publications_link   ='';
// var prime_minister      ='';
// var prime_minister_name ='';
// var event 				='';

// var bill_id = object.root.children[1].attributes.id;
// var introduced = object.root.children[1].children[0].content;
// var parliament_number = object.root.children[1].children[1].attributes.parliamentNumber;
// var session = object.root.children[1].children[1].attributes.sessionNumber; 
// var bill_prefix          = object.root.children[1].children[2].attributes.prefix;
// var bill_number 		 = object.root.children[1].children[2].attributes.number;
// var title 				 = object.root.children[1].children[3].children[0].content;
// var short_title 		 = object.root.children[7].children[4].children[0].content; 
// var bill_type 			 = object.root.children[7].children[5].children[0].content;
// var sponsorer_title 	 = object.root.children[7].children[6].children[0].content;
// var sponsorer_name 		 = object.root.children[7].children[6].children[2].children[0].content;
// var sponsorer_party 	 = object.root.children[7].children[6].children[3].children[0].content;
// var publications 		 = object.root.children[7].children[9].children[0].children[0].content;
// var prime_minister 		 = object.root.children[7].children[7].children[0].content; 
// var prime_minister_name  = object.root.children[7].children[7].children[2].children[0].content;

// app.get('/init', function(req,res){

// 	for (var i = 0; i<object.root.children.length; i++){
// 		console.log(object.root.children[i].children[9].children[0]);
// 		console.log('``````````');

// 		bill_id 			 = object.root.children[i].attributes.id;
// 		// TODO format lastUpdated string
// 		introduced	 		 = object.root.children[i].children[0].content;
// 		// `````````````````````````````````````````````````````````````````
// 		parliament_number 	 = object.root.children[i].children[1].attributes.parliamentNumber;
// 		session 			 = object.root.children[i].children[1].attributes.sessionNumber; 
// 		bill_prefix			 = object.root.children[i].children[2].attributes.prefix;
// 		bill_number		     = object.root.children[i].children[2].attributes.number;
// 		title  				 = object.root.children[i].children[3].children[0].content;
// 		short_title 		 = object.root.children[i].children[4].children[0].content;
// 		sponsorer_title 	 = object.root.children[i].children[6].children[0].content;
// 		sponsorer_name 		 = object.root.children[i].children[6].children[2].children[0].content;
// 		sponsorer_party 	 = object.root.children[i].children[6].children[3].children[0].content;
// 		bill_type            = object.root.children[i].children[5].children[0].content;
		
// 		// if (object.root.children[i].children[9].children[0] == undefined){
// 		// 	console.log("undefined");
// 		// 	publications      = "No publications available";
// 		// 	publications_link = "No publications link available";
// 		// }else{
// 		// 	publications      = object.root.children[i].children[9].children[0].children[0].content;
// 		// 	publications_link = object.root.children[i].children[9].children[0].children[2].children[0].attributes. relativePath;
// 		// }
// 		// publications 		 = object.root.children[i].children[9].children[0].children[0].content;
// 		// publications_link    = object.root.children[i].children[9].children[0].children[2].children[0].attributes.relativePath;
// 		event				 = object.root.children[i].children[10].attributes.laagCurrentStage;

// 	// console.log(
// 	// 	bill_id + ' | ' + lastUpdated +' | ' + parliament_number + " | " + session + " | " + bill_prefix + " | " + 
// 	// 	bill_number + " | " + title + " | " + short_title + " | " + sponsorer_title + " | " + sponsorer_party + " | " + 
// 	// 	sponsorer_name + " | " + publications + " | " + publications_link + " | " + event + ' | '
// 	// 	);
// 	// console.log('```````````````````````````````````````````````````````````````````````````````````````````````')
// 		var newBill = bill({
// 			id: 		  	   bill_id,
// 			title: 		  	   short_title ? short_title : title,
// 			parliament:   	   parliament_number,
// 			session: 	  	   session,
// 			introduced:   	   introduced,
// 			number: 	  	   bill_prefix + '-' + bill_number,
// 			type:    	  	   bill_type, 
// 			sponsorer: 	       sponsorer_title + ',' + sponsorer_name + ',' + sponsorer_party,
// 			publications: 	   publications ? publications : "No publications available",
// 			publications_link: publications_link ? publications_link : "No links available",
// 			event: 			   event ? event : "No Event"
// 			// yea: 			   0,
// 			// nay: 			   0
// 		});

// 		newBill.save(function(err) {
// 		    if (err) {
// 		        console.log(err);
// 		    } else {
// 		        // console.log('new Bill created!');
// 		    }
// 		});
// 	}
// });

// Was 8080 or 80
// app.listen(8080, function(){
// 	console.log('Listening on Port 80');
// 	console.log('Press CTRL + C to stop server');
// });

app.listen(80, function(){
	console.log("Listening on port 80, Stop with ctrl+c");
});


// app.get('/:billId', function(req,res){
// 	bill.findOne({'_id': req.params.billId}, function(err,bills){
// 		if (err){
// 			console.log(err);
// 			res.status(400)
// 				.json({err:err})
// 		} else{
// 			res.json(bills)
// 		}
// 	} )
// })

//Creat new Bill
// app.post('/', function(req, res){
// 	var obj = req.body;
// 	var newObject = Model(obj);
// 	newObject.save(function(err){
// 		if (err){
// 			console.log(err);
// 			res.status(400)
// 				.json({err:err})
// 		} else{
// 			res.json(obj)
// 		}
// 	})
// 	res.json({msg: 'Post EP Reached'})
// })

// app.put('/:billId', function(req,res){
// 	var _bill = req.body;
// 	var update = {
// 		property1: _bill.property1,
// 		property2: _bill.property2,
// 		property3: _bill.property3
// 	}

// 	var query = {'_id':req.params.billId}
// 	bill.update(query, update, {}, function(err,bills){
// 		if(err){
// 			console.log(err);
// 			res.status(400)
// 				.json({err:err})		
// 		} else{
// 			res.json(bills);
// 		}
// 	});
// });

// app.get('*', function(req, res){
//   res.send('what???', 404);
// });

app.delete('/delete', function(req,res){
	bill.findOne({'id':req.params.billId}, function(err,bills){
		bill.remove(function(err){
			if(err){
				// console.log(err);
				res.status(400)
					.json({err:err})
			} else {
				res.json({delete:true})
			}
		})	
	});	
});





// bill.find({}, function(e,bills){
// 		if (e){
// 		console.log(e)
// 	} else{
// 		console.log (bills);
// 	}
// });

// bill.find({}, function(err, bills){
// 	if(err){
// 		console.log(err);
// 	} else {
// 		for (var i = 0; i < bills.length; i++){
// 			// console.log(bills);
// 			bills[i].summary();
// 		}
// 	}
// });



// app.get('/', function(req, res){
// 	res.send('express is running');
// });

// app.post('/endpoint', function(req, res){
// 	res.send('express is running');
// });


// Start on port 8080

