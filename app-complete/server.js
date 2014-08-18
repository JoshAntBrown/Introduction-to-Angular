var express = require('express'),
	app = express(),
	server = require('http').createServer(app);

// Listen for connections to the server
server.listen(3000);

// Configure the application
app.use(express.static(__dirname + '/public'));

// Send projects
app.get('/api/projects', function(req, res){
	res.send([{
		id: 0,
		name: 'Project Management Tool',
		budget: 2000
	},{
		id: 1,
		name: 'Personal Admin',
		budget: 5240
	},{
		id: 2,
		name: 'Large Client Project',
		budget: 2424
	}]);
});