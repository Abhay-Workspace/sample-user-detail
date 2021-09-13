var express = require("express");
var app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server running on port " + port);
});


app.get("/user1", (req, res, next) => {
    res.json({
        "username": 'FlyingWolf',
        "name": 'Simon Baker', 
        'tournaments_played': 34, 
        'tournaments_won': 09,
        'win_per': 26,
    });
});

app.get("/user2", (req, res, next) => {
    res.json({
        "username": 'Illuminati',
        "name": 'Abhay', 
        'tournaments_played': 20, 
        'tournaments_won': 01,
        'win_per': 05,
    });
});