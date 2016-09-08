var jwt    	   = require('jsonwebtoken');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: true});
var jsonParser 		 = bodyParser.json();

module.exports = function(req,res, urlencodedParser,jsonParser, next){
	console.log(req.body);
	var token  = req.body.token || req.param("token") || req.headers['authentication'];

	console.log(token);
	if (token){
		jwt.verify(token, 'expropositovivo', function(err, decoded){

			if (err){
				return res.json({ success: false, message: "Failed to authenticate"});

			} else {
				req.decoded = decoded;
				next();
			}

		});
	} else {
		return res.status(403).send({
			success: false,
			message: 'No token provided.'
		});
	}
};