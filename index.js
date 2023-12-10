const express = require('express');
const http = require('http');
const Primus = require('primus');

const app = express();
const server = http.createServer(app);
const primus = new Primus(server, { /* Primus configuration options */ });

// Express route for regular HTTP requests
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Primus WebSocket connection handling
primus.on('connection', (spark) => {
  console.log('Client connected:', spark.id);

  spark.on('data', (data) => {
    console.log('Received data from client:', data);
  });

  // Add more event handlers as needed

  spark.write('Hello from the server!');
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});