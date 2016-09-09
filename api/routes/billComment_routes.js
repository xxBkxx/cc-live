var router = require('express').Router();
var billComment = require('.././models/billComment');
var bodyParser 		 = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});
var jsonParser 		 = bodyParser.json();

router.post('/billComment', urlencodedParser, jsonParser, function (req,res) {
	// body...
	console.log('comment!');
})

module.exports = router;