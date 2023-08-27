# Starta projektet

- Navigera till mappen backend

- Kör kommandot *** npm run dev ***

# API Documentation

### GET /api/highscoredata

Retrieves a list of highscore data.

### POST /api/highscoredata

Adds a new highscore data to the list.

#### Request

- `{ 
name: nameValue,
time: time,
guesses: guessCount,
wordLength: selectLength,
excludeUniqueLetters: uniqueLetters,
}`

### GET /api/randomword

Generates a random word.

### GET /api/settings

Retrieves the game settings.

### PUT /api/settings

Updates the game settings.

#### Request

- ` [
  { wordLength: parseInt(selectLength) },
  { excludeUniqueLetters: uniqueLetters },
]`

### GET /highscore

Renders the highscore page.

### GET /information

Renders the information page.

### GET /game

Renders the game page.

## Libraries used

- express
- cors
- dotenv
- fs
- ejs
