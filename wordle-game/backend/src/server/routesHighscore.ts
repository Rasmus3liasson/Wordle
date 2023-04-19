import express from "express";

const highscoreRoute = express.Router();

interface highscoreData {
  highscoreList: {
    guesses: number;
    wordLength: number;
    excludeUniqueLetters: boolean;
  }[];
}

highscoreRoute.get("/", async (req, res) => {
  const wordLength: number = parseInt(req.query.wordlength as string);
  const guesses: number = parseInt(req.query.guesses as string);
  const excludeLetters: boolean = req.query.excludeLetters === "true";
  const highscoreRes = await fetch("http://localhost:5080/api/highscoredata");
  const data = (await highscoreRes.json()) as highscoreData;
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
