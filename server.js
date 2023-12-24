const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3200; // You can change this to any port you prefer

const server = http.createServer((req, res) => {
  // Read the contents of main.html
  const filePath = path.join(__dirname, 'main.html');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }

    // Send the HTML content as the response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
