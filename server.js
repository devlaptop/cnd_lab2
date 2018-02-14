var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.text());

function convertToCaps(str) {
    return str.toUpperCase();
}

app.get('/', function(req,res) {

	res.writeHead(200, {'Content-Type': 'text/plain'});
          res.write('This is a test\n');
      res.end();
});

app.post('/api/capitalise', function(req, res) {
    res.send(convertToCaps(req.body));
})

if (require.main === module) {
    app.listen(port, function() {
        console.log('Server listening on port: ' + port);
    });
}
