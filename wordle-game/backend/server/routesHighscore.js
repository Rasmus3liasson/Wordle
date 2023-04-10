import express from "express";
import fetch from "node-fetch";

const highscoreRoute = express.Router();

highscoreRoute.get("/", async (req, res) => {
  const wordLength = parseInt(req.query.wordlength);
  const guesses = parseInt(req.query.guesses);
  const excludeLetters = req.query.excludeLetters === "true";
  const highscoreRes = await fetch("http://localhost:5080/api/highscoredata");
  const data = await highscoreRes.json();
  let highscoreDetails = data.highscoreList;

  if (wordLength) {
    highscoreDetails = highscoreDetails.filter(
      (length) => length.wordLength === wordLength
    );
  }
  if (guesses) {
    highscoreDetails = highscoreDetails.filter(
      (filter) => filter.guesses === guesses
    );
  }
  if (excludeLetters) {
    highscoreDetails = highscoreDetails.filter(
      (filter) => filter.excludeUniqueLetters === excludeLetters
    );
  }

  res.render("highscore", {
    highscoreDetails,
  });
});

/* highscoreRoute.get("/", async (req, res) => {
  const wordLength = parseInt(req.query.wordlength);
  const highscoreRes = await fetch("http://localhost:5080/api/highscoredata");
  const data = await highscoreRes.json();
  let highscoreDetails = data.highscoreList;

  highscoreDetails = highscoreDetails.filter(
    (length) => length.wordLength === wordLength
  );
  console.log(highscoreDetails);
  res.render("highscore", {
    highscoreDetails,
  });
}); */
/* highscoreRoute.get("/:wordlength/:guesses", async (req, res) => {
  const wordLength = parseInt(req.params.wordlength);
  const guesses = parseInt(req.params.guesses);
  const highscoreRes = await fetch("http://localhost:5080/api/highscoredata");
  const data = await highscoreRes.json();
  let highscoreDetails = data.highscoreList;

  highscoreDetails = highscoreDetails.filter(
    (filter) => filter.wordLength === wordLength && filter.guesses === guesses
  );

  res.render("highscore", {
    highscoreDetails,
  });
});

highscoreRoute.get(
  "/:wordlength/:guesses/:excludeLetters",
  async (req, res) => {
    const wordLength = parseInt(req.params.wordlength);
    const guesses = parseInt(req.params.guesses);
    const excludeLetters = req.params.excludeLetters === "true";
    const highscoreRes = await fetch("http://localhost:5080/api/highscoredata");
    const data = await highscoreRes.json();
    let highscoreDetails = data.highscoreList;

    highscoreDetails = highscoreDetails.filter(
      (filter) =>
        filter.wordLength === wordLength &&
        filter.guesses === guesses &&
        filter.excludeUniqueLetters === excludeLetters
    );

    res.render("highscore", {
      highscoreDetails,
    });
  }
); */

export default highscoreRoute;
