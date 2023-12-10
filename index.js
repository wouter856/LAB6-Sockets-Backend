const http = require('http');
const WebSocketServer = require('websocket').server;

//require express
const express = require('express');

const server = http.createServer((req, res) => {
  console.log('request received');

});

const websocket = new WebSocketServer({
  "httpServer": httpserver
});

websocket.on('request', request => {
    conn = request.accept(null, request.origin);
});


server.listen(3000, () => {
  console.log('server started at port 3000');
});