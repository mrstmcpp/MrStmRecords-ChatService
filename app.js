const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Connection = require('./config/database');
const messageRoutes = require('./routes/messageRoutes');
const app = express();

app.use(cors());
app.use(express.json());

Connection();

app.use('/api/v1/chat', messageRoutes);
app.get('/' , (req, res) => {
    res.send("Welcome to socket server");
})

module.exports = app;