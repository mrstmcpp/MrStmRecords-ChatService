const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { default: Connection } = require('./config/database');

const app = express();

app.use(cors());
app.use(express.json());

Connection();

app.get('/' , (req, res) => {
    res.send("Welcome to socket server");
})

module.exports = app;