const express = require('express');
const server  = express();
const games = require('./src/data/games.json');
const port = process.env.PORT || 3000;

server.get('/games', (req, res) => {
    return res.json(games);
});


server.listen(port, () => {
    console.log('Server is running on port 3000');
});

