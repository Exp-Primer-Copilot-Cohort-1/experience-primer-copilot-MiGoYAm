// Create web server
// Start server: node comments.js
// Test: curl -d "comment=Hello World" http://localhost:3000
// Test: curl http://localhost:3000

// Load modules
var http = require('http');
var fs = require('fs');
var qs = require('querystring');

// Create server
http.createServer(function (req, res) {
  if (req.method === "POST") {
    console.log("POST");
    var body = "";

    req.on('data', function (data) {
      body += data;
      console.log("Partial body: " + body);
    });

    req.on('end', function () {
      var post = qs.parse(body);
      console.log("Comment: " + post.comment);
    });
  }

  res.writeHead(200, {'Content-Type': 'text/html'});
  var html = fs.readFileSync('index.html');
  res.end(html);
}).listen(3000);

console.log('Server running on port 3000.');