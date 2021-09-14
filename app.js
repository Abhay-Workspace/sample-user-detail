var express = require("express");
var app = express();

const cors = require("cors");
app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server running on port " + port);
});


app.get("/user1", (req, res, next) => {
    res.json({
        "username": 'FlyingWolf',
        "name": 'Simon Baker',
        "elo_rating": 2250, 
        'tournaments_played': 34, 
        'tournaments_won': 09,
        'win_per': 26, 
        'image_url': 'https://img5.goodfon.com/wallpaper/nbig/7/d0/vzgliad-kostium-akter-saimon-beiker-simon-baker.jpg',
    });
});

app.get("/user2", (req, res, next) => {
    res.json({
        "username": 'Illuminati',
        "name": 'Abhay', 
        "elo_rating": 1120,
        'tournaments_played': 20, 
        'tournaments_won': 01,
        'win_per': 05,
        'image_url': 'https://t4.ftcdn.net/jpg/02/97/28/87/240_F_297288719_dMUUuJK6lRgdNzRuQE5ESEUojANdNqSq.jpg',
    });
});