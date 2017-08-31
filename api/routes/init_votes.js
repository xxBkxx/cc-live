var router 		= require('express').Router();
var bill = require('.././models/bill.js');

router.get('/initVotes', function (err,res){

	bill.find(function (err, bill){
		// console.log('bill vote');
		// console.log(bill.yea);
		res.json(bill);
	});

});

module.exports = router;