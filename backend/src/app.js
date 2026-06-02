//Create server
const express = require('express');



const app = express();

app.get("/" , (req ,res) => {
    res.send("Welcome to Zomato Reels Backend");
})

module.exports = app;