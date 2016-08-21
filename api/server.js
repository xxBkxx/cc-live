var express  = require('express');
var app 	 = express();
var fs 		 = require('fs');
var parse    = require('xml-parser');
var xml 	 = fs.readFileSync('download.xml', 'utf8');
var inspect  = require('util').inspect;
var mongoose = require('mongoose');
var bill 	 = require('./models/bill');
app.use(express.static('../app/'));

mongoose.connect('mongodb://localhost/data/db');
var db 		= mongoose.connection;

db.on('error', console.error.bind(console, 'connection Error:'));
db.once('open', function(){
	console.log('Connected to db at /data/db/')
		console.log(db);
	mongoose.connection.db.dropDatabase(function (err) {
	  console.log('db dropped');
	  console.log(err);
	  // process.exit(0);
	});
});

// mongoose.connection.db.dropDatabase(function (err) {
//   console.log('db dropped');
//   console.log(err);
//   process.exit(0);
// });

app.get('/billWatch', function(req,res){
	bill.find({}, function(err, bills){
		if (err){
			console.log(err);
			res.status(400)
				.json({err:err});
 		} else{
 			res.json(bills);
 			console.log("$$$$");
 			console.log(bills);
 		}
 		// mongoose.connection.close();
	});
});
 
var object = parse(xml);
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

var bill_id 		    = 0;
var introduced 		    ='';
var parliament_number   = 0;
var session 		    = 0;
var bill_prefix		    ='';
var bill_number		    = 0;
var Title			    ='';
var short_title		    ='';
var bill_type		    ='';
var sponsorer_title	    ='';
var sponsorer_name      ='';
var sponsorer_party     ='';
var publications	    ='';
var publications_link   ='';
var prime_minister      ='';
var prime_minister_name ='';
var event 				='';

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

app.get('/init', function(req,res){

	for (var i = 0; i<object.root.children.length; i++){
	// console.log(object.root.children[i].attributes.id);
	// console.log('``````````');

		bill_id 			 = object.root.children[i].attributes.id;
		// TODO format lastUpdated string
		introduced	 		 = object.root.children[i].children[0].content;
		// `````````````````````````````````````````````````````````````````
		parliament_number 	 = object.root.children[i].children[1].attributes.parliamentNumber;
		session 			 = object.root.children[i].children[1].attributes.sessionNumber; 
		bill_prefix			 = object.root.children[i].children[2].attributes.prefix;
		bill_number		     = object.root.children[i].children[2].attributes.number;
		title  				 = object.root.children[i].children[3].children[0].content;
		short_title 		 = object.root.children[i].children[4].children[0].content;
		sponsorer_title 	 = object.root.children[i].children[6].children[0].content;
		sponsorer_name 		 = object.root.children[i].children[6].children[2].children[0].content;
		sponsorer_party 	 = object.root.children[i].children[6].children[3].children[0].content;
		bill_type            = object.root.children[7].children[5].children[0].content;
		// publications 		 = object.root.children[i].children[9].children[0].children[0].content;
		// publications_link    = object.root.children[i].children[9].children[0].children[2].children[0].attributes.relativePath;
		event				 = object.root.children[i].children[10].attributes.laagCurrentStage;

	// console.log(
	// 	bill_id + ' | ' + lastUpdated +' | ' + parliament_number + " | " + session + " | " + bill_prefix + " | " + 
	// 	bill_number + " | " + title + " | " + short_title + " | " + sponsorer_title + " | " + sponsorer_party + " | " + 
	// 	sponsorer_name + " | " + publications + " | " + publications_link + " | " + event + ' | '
	// 	);
	// console.log('```````````````````````````````````````````````````````````````````````````````````````````````')
		var newBill = bill({
			id: 		  	   bill_id,
			title: 		  	   short_title ? short_title : title,
			parliament:   	   parliament_number,
			session: 	  	   session,
			introduced:   	   introduced,
			number: 	  	   bill_prefix + '-' + bill_number,
			type:    	  	   bill_type, 
			sponsorer: 	       sponsorer_title + ',' + sponsorer_name + ',' + sponsorer_party,
			publications: 	   publications,
			publications_link: publications_link,
			event: 			   event,
			yea: 			   undefined,
			nay: 			   undefined
		});

		newBill.save(function(err) {
		    if (err) {
		        console.log(err);
		    } else {
		        // console.log('new Bill created!');
		    }
		});
	}
});

app.listen(8080, function(){
	console.log('started on http://localhost');
	console.log('Press CTRL + C to stop server');
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

app.delete('/delete', function(req,res){
	bill.findOne({'id':req.params.billId}, function(err,bills){
		bill.remove(function(err){
			if(err){
				console.log(err);
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

