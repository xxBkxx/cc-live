var router 	 = require('express').Router();
var fs 		 = require('fs');
var parse    = require('xml-parser');
var xml 	 = fs.readFileSync('download.xml', 'utf8');
var bill     = require('.././models/bill');

router.get('/init', function(req,res){
	var object = parse(xml);

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

	for (var i = 0; i<object.root.children.length; i++){
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
		bill_type            = object.root.children[i].children[5].children[0].content;
		
		// if (object.root.children[i].children[9].children[0] == undefined){
		// 	console.log("undefined");
		// 	publications      = "No publications available";
		// 	publications_link = "No publications link available";
		// }else{
		// 	publications      = object.root.children[i].children[9].children[0].children[0].content;
		// 	publications_link = object.root.children[i].children[9].children[0].children[2].children[0].attributes. relativePath;
		// }
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
			publications: 	   publications ? publications : "No publications available",
			publications_link: publications_link ? publications_link : "No links available",
			event: 			   event ? event : "No Event"
			// yea: 			   0,
			// nay: 			   0
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

router.get('/billWatch', function(req,res){
	bill.find({}, function(err, bills){
		if (err){
			console.log(err);
			res.status(400)
				.json({err:err});
 		} else{
 			res.json(bills);
 			// console.log("$$$$");
 			// console.log(bills);
 		}
 		// mongoose.connection.close();
	});
});

module.exports = router;
