require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser'); // Parses Json Data
const cors = require('cors'); // Allow Frontend to access data from different port

const app = express();
const { WEB_PORT} = process.env; // Process contents of .env File

// Middlewear
app.use(cors());
app.use(bodyParser.json())

// Stored Data
var messages = ["From", "Backend"];


// Retrieves Data
app.get('/messages', (req, res) => {
    res.send(messages);
});

// Retrieves Data
app.get('/messages/:id', (req, res) => {
    console.log(req.params.id);
    res.send(messages[req.params.id]);
});

// Sends Data
app.post('/messages', (req, res) => {
    let msg = req.body;
    console.log(msg);
    messages.push(msg.message);
    res.json(msg);
    console.log(messages);
});


// Displays Port
app.listen(WEB_PORT, () => {
    console.log(
      `Example app listening at http://localhost:${WEB_PORT}`
    );
});
  