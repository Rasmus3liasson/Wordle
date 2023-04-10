import express from "express";
import fetch from "node-fetch";

const highscoreRoute = express.Router();

highscoreRoute.get("/", async (req, res) => {
  const highscoreRes = await fetch("http://localhost:5080/api/highscoredata");
  const data = await highscoreRes.json();
  const highscoreDetails = data.highscoreList;

  res.render("highscore", {
    highscoreDetails,
  });
});

highscoreRoute.get("/:wordlength", async (req, res) => {
  const wordLength = parseInt(req.params.wordlength);
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
});
highscoreRoute.get("/:wordlength/:guesses", async (req, res) => {
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
);

export default highscoreRoute;
