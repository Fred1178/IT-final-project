const express = require('express');
const app = express();
const port = 5000;


const playerData = { 
    name: "You",
    img: "",
    level: 2,
    health: 50,
    maxHealth: 100,
    armor: "none",
    damage: 20,
    potions: 10,
    gold: 0
};



app.get('/api/player', (req, resp) => {
    console.log("Received request");
    resp.json(playerData);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});