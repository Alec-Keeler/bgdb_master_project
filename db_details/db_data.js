let boardgames = [ //name, max_players, category, avg_rating
    ('Gloomhaven', 4, 'Adventure', 8.8),
    ('Pandemic Legacy: Season 1', 4, 'Cooperative', 8.62),
    ('Brass: Birmingham', 4, 'Economic', 8.66),
    ('Terraforming Mars', 5, 'Economic', 8.43),
    ('Twilight Imperium: Fourth Edition', 6, 'Strategy', 8.7),
    ('Spirit Island', 4, 'Cooperative', 8.34),
    ('Mage Knight', 4, 'Adventure', 8.1),
    ('Rising Sun', 5, 'Strategy', 7.88)
]

let users = [ //username, email, password, fave_category
    ('Alec', 'alec@alec.com', 'password123', 'Strategy'),
    ('Dan', 'dan@dan.com', 'password!', 'Cooperative'),
    ('Ray', 'ray@ray.com', 'password098', 'Adventure'),
    ('Nate', 'nate@nate.com', 'password!@#', 'Economic'),
    ('Adrian', 'adrian@adrian.com', 'password123!', 'Strategy'),
    ('Caleb', 'caleb@caleb.com', 'password', 'Adventure')
]

let reviews = [ // content, game_id, user_id
    ('There is nothing I love more than escaping one pandemic for another, 10/10', 2, 2),
    ('This game is far too long!', 5, 5),
    ('My friends and I really like this game, lots of replayability', 6, 4),
    ('I can be a space pirate, favorite game hands down.', 5, 1),
    ('It isn\' as cool as Gloomhaven, but it\'s still pretty dope', 7, 3),
    ('N/A', 1, 6)
]

let wishlist = [ //game_id, user_id
    (1, 5),
    (1, 2),
    (3, 1),
    (5, 5),
    (2, 2),
    (4, 4),
    (6, 6),
    (1, 3),
    (3, 3),
    (8, 1),
    (7, 5),
    (8, 2),
    (5, 2),
    (8, 1)
]