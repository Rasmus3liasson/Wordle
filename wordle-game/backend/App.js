import mongoose from "mongoose";
import express from "express";
import fs from "fs";
import { wordList } from "./wordsFolder/words.js";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static("../build"));
app.set("view engine", "ejs");
app.use(cors());

const HighScore = mongoose.model("highscoreData", {
  name: String,
  time: String,
  guesses: Number,
  wordLength: Number,
  excludeUniqueLetters: Boolean,
});

app.get("/api/highscoredata", async (req, res) => {
  const conn = await mongoose.connect(process.env.HighscoreDatabas);
  //sort by fastest time
  const highscoreData = await HighScore.find().sort({ time: 1 });
  console.log(highscoreData);
  conn.disconnect();

  res.status(200).json({
    highscoreList: highscoreData,
  });
});

app.post("/api/highscoredata", async (req, res) => {
  const conn = await mongoose.connect(process.env.HighscoreDatabas);

  const { name, time, guesses, wordLength, excludeUniqueLetters } = req.body;

  const highscoreData = new HighScore({
    name,
    time,
    guesses,
    wordLength,
    excludeUniqueLetters,
  });
  await highscoreData.save();
  conn.disconnect();

  res.status(200).json({
    message: "request went through",
  });
});

app.get("/highscore", async (req, res) => {
  const highscoreRes = await fetch("http://localhost:5080/api/highscoredata");
  const data = await highscoreRes.json();
  const highscoreDetails = data.highscoreList;

  res.render("highscore", {
    highscoreDetails,
  });
});

app.get("/highscore/:wordlength", async (req, res) => {
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
app.get("/highscore/:wordlength/:guesses", async (req, res) => {
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

app.get("/highscore/:wordlength/:guesses/:excludeLetters", async (req, res) => {
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
});

app.get("/information", (req, res) => {
  res.render("information");
});

app.get("/game", (req, res) => {
  fs.readFile("../build/index.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send("Couldn't read file");
    } else {
      res.send(data);
    }
  });
});

app.get("/api/words", async (req, res) => {
  res.status(200).json({
    data: {
      wordList: wordList,
    },
  });
});

app.listen(5080);
