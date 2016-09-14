var router 		= require('express').Router();
var billComment = require('.././models/billComment.js');

router.get('/initComments', function (err,res){

billComment.find(function (err, billComments){
	console.log("--------");
	console.log(billComments);
	console.log('--------');
	res.send(billComments);

});

});

module.exports = router;