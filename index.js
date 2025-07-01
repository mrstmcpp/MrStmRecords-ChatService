const express = require('express');
const app = require('./app');
const {Server} =  require('socket.io');
const http = require('http')
const chatHandler = require('./sockets/chat');


const server = http.createServer(app);
const io = new Server(server , {
    cors: {
        origin: '*',
    }
});


chatHandler(io);

const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Chat service running on ${PORT}`));