import express from "express";
import fetch from "node-fetch";

const highscoreRoute = express.Router();

highscoreRoute.get("/", async (req, res) => {
  const wordLength = parseInt(req.query.wordlength);
  const guesses = parseInt(req.query.guesses);
  const excludeLetters = req.query.excludeLetters === "true";
  const highscoreRes = await fetch("/api/highscoredata");
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
    currentPage: "highscore",
  });
});

export default highscoreRoute;
