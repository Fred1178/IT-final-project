const express = require('express');
const app = express();
const port = 5000;


const playerData = { 
    name: "You",
    img: "",
    level: 1,
    health: 50,
    maxHealth: 50,
    weapon: "longsword",
    armor: "leather armor",
    damage: 15,
    potionNum: 5,
    gold: 0
};



app.get('/api/player', (req, resp) => {
    console.log("Received request");
    resp.append('Access-Control-Allow-Origin', '*').json(playerData);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});