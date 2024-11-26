const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  res.statusCode = 200; // HTTP Status Code: 200 OK
  res.setHeader('Content-Type', 'text/plain'); // Set content type to plain text
  res.end('Hello Holberton School!\n'); // Send the response body
});

// Make the server listen on port 1245
app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the server as the variable 'app'
module.exports = app;
