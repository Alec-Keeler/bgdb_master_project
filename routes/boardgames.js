// Task 10
const express = require('express');
const router = express.Router();

// Task 3
let boardgames = [ //name, max_players, category, avg_rating
    { name: 'Gloomhaven', max_players: 4, category: 'Adventure', avg_rating: 8.8 },
    { name: 'Pandemic Legacy: Season 1', max_players: 4, category: 'Cooperative', avg_rating: 8.62 },
    { name: 'Brass: Birmingham', max_players: 4, category: 'Economic', avg_rating: 8.66 },
    { name: 'Terraforming Mars', max_players: 5, category: 'Economic', avg_rating: 8.43 },
    { name: 'Twilight Imperium: Fourth Edition', max_players: 6, category: 'Strategy', avg_rating: 8.7 },
    { name: 'Spirit Island', max_players: 4, category: 'Cooperative', avg_rating: 8.34 },
    { name: 'Mage Knight', max_players: 4, category: 'Adventure', avg_rating: 8.1 },
    { name: 'Rising Sun', max_players: 5, category: 'Strategy', avg_rating: 7.88 }
]
// Task 3
router.get('/', (req, res) => {
    let names = []
    for (let i = 0; i < boardgames.length; i++) {
        const game = boardgames[i];
        names.push(game.name)
    }
    res.json({ names })
})

// Task 5a
router.get('/total', (req, res) => {
    res.json({ numberOfGames: boardgames.length })
})

// Task 6 
// test: http://localhost:8080/boardgames/category?category=Adventure
router.get('/category', (req, res) => {
    const category = req.query.category
    let games = []
    for (let i = 0; i < boardgames.length; i++) {
        const game = boardgames[i];
        if (game.category === category) {
            games.push(game.name)
        }
    }
    res.json({ games })
})

// Task 5b
router.get('/:index', (req, res) => {
    res.json({ name: boardgames[req.params.index].name })
})

module.exports = router;