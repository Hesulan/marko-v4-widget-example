require('marko/express');
require('marko/node-require');

var express = require('express');
var app = express();

require('lasso').configure({
	plugins: [
		'lasso-marko'
	]
});

app.use(require('lasso/middleware').serveStatic());

var template = require('./index.marko');
app.use(function(req,res) {
	res.marko(template);
});

app.listen(3000);

