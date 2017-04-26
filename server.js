var http = require('http');
var express = require('express');
var app = express();
var os = require('os');

app.get('/', function(req,res){
	var data = {
		ipaddress: req.ip,
		language: (req.headers['accept-language']).split(',')[0],
		software: (req.headers['user-agent']).split('(')[1].split(')')[0]
	}
	res.send(data);
}).listen(8080);
