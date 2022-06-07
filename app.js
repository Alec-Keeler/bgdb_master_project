// Task 1a
const express = require('express');
const app = express();

// Task 4a
app.use(express.json())
// Task 8
app.use(express.static('public'))
// Task 11
require('dotenv').config();

// Task 7c
app.use((req, res, next) => {
    console.log('Your request has been received by bgdb')
    next()
})

// Task 2a
app.get('/home', (req, res) => {
    // Task 2b
    res.send('Welcome to the Board Game Database')
})
// Task 10
const gamesRouter = require('./routes/boardgames')
const reviewsRouter = require('./routes/reviews')
app.use('/boardgames', gamesRouter)
app.use('/reviews', reviewsRouter)

// // Task 3
// let boardgames = [ //name, max_players, category, avg_rating
//     { name: 'Gloomhaven', max_players: 4, category: 'Adventure', avg_rating: 8.8},
//     { name: 'Pandemic Legacy: Season 1', max_players: 4, category: 'Cooperative', avg_rating: 8.62},
//     { name: 'Brass: Birmingham', max_players: 4, category: 'Economic', avg_rating: 8.66},
//     { name: 'Terraforming Mars', max_players: 5, category: 'Economic', avg_rating: 8.43},
//     { name: 'Twilight Imperium: Fourth Edition', max_players: 6, category: 'Strategy', avg_rating: 8.7},
//     { name: 'Spirit Island', max_players: 4, category: 'Cooperative', avg_rating: 8.34},
//     { name: 'Mage Knight', max_players: 4, category: 'Adventure', avg_rating: 8.1},
//     { name: 'Rising Sun', max_players: 5, category: 'Strategy', avg_rating: 7.88}
// ]
// // Task 3
// app.get('/boardgames', (req, res) => {
//     let names = []
//     for (let i = 0; i < boardgames.length; i++) {
//         const game = boardgames[i];
//         names.push(game.name)
//     }
//     res.json({names})
// })

// // Task 5a
// app.get('/boardgames/total', (req, res) => {
//     res.json({numberOfGames: boardgames.length})
// })

// // Task 6 
// // test: http://localhost:8080/boardgames/category?category=Adventure
// app.get('/boardgames/category', (req, res) => {
//     const category = req.query.category
//     let games = []
//     for (let i = 0; i < boardgames.length; i++) {
//         const game = boardgames[i];
//         if (game.category === category) {
//             games.push(game.name)
//         }
//     }
//     res.json({games})
// })

// // Task 5b
// app.get('/boardgames/:index', (req, res) => {
//     res.json({name: boardgames[req.params.index].name})
// })

// // Task 7a
// const contentCheck = (req, res, next) => {
//     const {content} = req.body;
//     if (content.length < 5) {
//         res.json({message: "Please provide a longer review"})
//     } else {
//         next()
//     }
// }

// // Task 7b
// const gameIndexCheck = (req, res, next) => {
//     const {game_index} = req.body;
//     numGames = boardgames.length
//     if (game_index >= numGames) {
//         res.json({message: "Please provide a valid game index"})
//     } else (
//         next()
//     )
// }
// const reviewChecks = [contentCheck, gameIndexCheck]

// // Task 4
// let reviews = []
// // Task 4b
// app.post('/reviews', reviewChecks, (req, res) => {
//     const {content, game_index, username} = req.body;
//     reviews.push({content, game_index});
//     res.json({reviews})
// })

// Task 9a
app.use((req, res, next) => {
    const err = new Error('This Page Does Not Exist');
    err.statusCode = 404;
    next(err);
})

// Task 9b
app.use((err, req, res, next) => {
    console.log(err)
    res.json({message: err.message, statusCode: err.statusCode})
})

// Task 11
const port = process.env.PORT
// Task 1b
// const port = 8080;
app.listen(port, () => console.log(`Listening on port: ${port}...`))