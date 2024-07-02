//import the http module
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode=200;
    res.setHeader( 'Content-Type', 'text/html' );  // Respond with a simple HTML page when the root route (/) is accessed.
    res.end('<h1>Welcome to my Node.js Server!</h1>');
  } else if (req.url === '/api') {
    res.writeHead(200, { 'Content-Type': 'application/json' });  // Respond with a JSON object containing a greeting message when the /api route is accessed.
    res.end(JSON.stringify({ message: 'Hello, this is your API response!' }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });  // Ensure that requests to any other route respond with an appropriate error message and status code.
    res.end('404 Not Found');
  }
});

// Step 4: Listen on a Port
server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000/');
});
