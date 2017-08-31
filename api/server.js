var express    = require('express');
var bodyParser = require('body-parser');
var app 	   = express();
var fs 		   = require('fs');
var inspect    = require('util').inspect;
var mongoose   = require('mongoose');
var path 	   = require('path');

var http       = require('http');
var https 	   = require('https');

var users      = require('./models/users');
var jwt		   = require('jsonwebtoken');

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

app.use(express.static(__dirname + './../app', {redirect: true}));


console.log(__dirname);


// URL beautification ######
// app.use('*', function(req,res,next){
// 	var indexFile = path.resolve(__dirname + '/../app/index.html');
// 	// var indexFile = path.resolve('C:/Users/BK/Google Drive/GitHub/cc-live/app/index.html');

// 	res.sendFile(indexFile);
// })



// var port = process.env.PORT || 3000;
// app.listen(port, function(){
// 	console.log('Listening on Port' + port);
// 	console.log('Press CTRL + C to stop server');
// });

const OPTIONS = {
	key:  fs.readFileSync('blast.key'),
	cert: fs.readFileSync('blast.crt')
}

var insecureServer = http.createServer(app).listen(3000);
var sercureServer  = https.createServer(OPTIONS,app).listen(8443);

mongoose.connect('localhost/data/db');
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

// app.delete('/delete', function(req,res){
// 	bill.findOne({'id':req.params.billId}, function(err,bills){
// 		bill.remove(function(err){
// 			if(err){
// 				// console.log(err);
// 				res.status(400)
// 					.json({err:err})
// 			} else {
// 				res.json({delete:true})
// 			}
// 		})	
// 	});	
// });