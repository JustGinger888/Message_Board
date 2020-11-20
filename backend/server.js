require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser'); // Parses Json Data
const cors = require('cors'); // Allow Frontend to access data from different port
const jwt = require('jsonwebtoken');

const app = express();
const { WEB_PORT, SECRET } = process.env; // Process contents of .env File

// Middlewear
app.use(cors());
app.use(bodyParser.json())

// Stored Data
var messages = [{ user: "Jim", text: "From" }, { user: "Jim", text: "Backend" }];
var users = [{ userName: "Jim", password: "123" }];


// Retrieves Data List
app.get('/messages', (req, res) => {
    res.send(messages);
});

// Retrieves Data for specified Entry
app.get('/messages/:id', (req, res) => {
    res.send(messages[req.params.id]);
});

// Sends Data
app.post('/messages', (req, res) => {
    const token = req.header('Authorization');
    const userID = jwt.decode(token, SECRET); // Decoding ID with Secret
    const user = users[userID];

    let msg = { user: user.userName, text: req.body.message };
    messages.push(msg); // Adding message to Message DB

    res.json(msg);
});

// Register Data
app.post('/register', (req, res) => {
    let registerData = req.body;
    let newIndex = users.push(registerData); // Add new User to User DB
    let userID = newIndex - 1;

    let token = jwt.sign(userID, SECRET); // Encoding User by using Secret Key 
    users[userID].token = token;

    res.json(token);
});

app.post('/login', (req, res) => {
    let loginData = req.body;

    let userId = users.findIndex(user => user.userName == loginData.userName);

    // Error Checking
    if(userId == -1)
        return res.status(401).send({message: 'name or password is invalid'});

    if(users[userId].password != loginData.password)
        return res.status(401).send({message: 'name or password is invalid'});

    let token = jwt.sign(userId, '123');

    res.json(token);
});


// Displays Port
app.listen(WEB_PORT, () => {
    console.log(
        `Example app listening at http://localhost:${WEB_PORT}`
    );
});
