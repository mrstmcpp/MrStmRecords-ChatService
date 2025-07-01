const express = require('express');
const app = require('./app');
const {Server} =  require('socket.io');
const http = require('http')

const server = http.createServer(app);
const io = new Server(server , {
    cors: {
        origin: '*',
    }
});

io.on("connection" , (socket) => {

})


const PORT = process.env.PORT || 5001;
server.listen(PORT, () => console.log(`Chat service running on ${PORT}`));