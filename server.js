var express = require('express');

var app = express();

app.use(express.static(__dirname + '/app'));

app.listen(8080, function(){
	console.log('started on http://localhost:8080');
	console.log('Press CTRL + C to stop server');
});

app.get('/endpoint1', function(req,res){
	response.send('GET EP Reached');
});

app.post('/endpoint1', function(req, res){
	res.json({msg: 'Post EP Reached'})
})
// app.get('/', function(req, res){
// 	res.send('express is running');
// });

// app.post('/endpoint', function(req, res){
// 	res.send('express is running');
// });


// Start on port 8080

