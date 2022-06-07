// Task 10
const express = require('express');
const router = express.Router();

let boardgames = [ //name, max_players, category, avg_rating
    { name: 'Gloomhaven', max_players: 4, category: 'Adventure', avg_rating: 8.8},
    { name: 'Pandemic Legacy: Season 1', max_players: 4, category: 'Cooperative', avg_rating: 8.62},
    { name: 'Brass: Birmingham', max_players: 4, category: 'Economic', avg_rating: 8.66},
    { name: 'Terraforming Mars', max_players: 5, category: 'Economic', avg_rating: 8.43},
    { name: 'Twilight Imperium: Fourth Edition', max_players: 6, category: 'Strategy', avg_rating: 8.7},
    { name: 'Spirit Island', max_players: 4, category: 'Cooperative', avg_rating: 8.34},
    { name: 'Mage Knight', max_players: 4, category: 'Adventure', avg_rating: 8.1},
    { name: 'Rising Sun', max_players: 5, category: 'Strategy', avg_rating: 7.88}
]

// Task 7a
const contentCheck = (req, res, next) => {
    const { content } = req.body;
    if (content.length < 5) {
        res.json({ message: "Please provide a longer review" })
    } else {
        next()
    }
}

// Task 7b
const gameIndexCheck = (req, res, next) => {
    const { game_index } = req.body;
    numGames = boardgames.length
    if (game_index >= numGames) {
        res.json({ message: "Please provide a valid game index" })
    } else (
        next()
    )
}
const reviewChecks = [contentCheck, gameIndexCheck]

// Task 4
let reviews = []
// Task 4b
router.post('/', reviewChecks, (req, res) => {
    const { content, game_index, username } = req.body;
    reviews.push({ content, game_index });
    res.json({ reviews })
})

module.exports = router;