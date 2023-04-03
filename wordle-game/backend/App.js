import mongoose from "mongoose";
import express from "express";
import fs from "fs";
import { wordList } from "./wordsFolder/words.js";
import fetch from "node-fetch";

const app = express();

app.use(express.json());
app.use(express.static("../build"));
app.set("view engine", "ejs");

const HighScore = mongoose.model("highscoreData", {
  name: String,
  time: String,
});

/* async function runHighScore() {
  const conn = await mongoose.connect(
    "mongodb://127.0.0.1:27017/highscoreList"
  );

  const obj = new HighScore({
    name: "Nicklas",
    time: "02.58",
  });

  await obj.save();

  const hej = await HighScore.find();
  console.log(hej);

  conn.disconnect();
}

runHighScore(); */

app.get("/highscoredata", async (req, res) => {
  const conn = await mongoose.connect(
    "mongodb://127.0.0.1:27017/highscoreList"
  );
  const highscoreData = await HighScore.find();
  console.log(highscoreData);
  conn.disconnect();

  res.status(200).json({
    highscoreList: highscoreData,
  });
});

app.get("/highscore", async (req, res) => {
  const highscoreRes = await fetch("http://localhost:5080/highscoredata");
  const data = await highscoreRes.json();
  const list = data.highscoreList;

  const personInfo = list
    .map((score) => `${score.name} ${score.time}`)
    .join(" ");

  res.render("highscore", {
    body: personInfo,
  });
});

app.get("/information", (req, res) => {
  fs.readFile("./information.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send("Couldn't read file");
    } else {
      res.send(data);
    }
  });
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
app.get("/words", async (req, res) => {
  res.status(200).json({
    data: {
      wordList: wordList,
    },
  });
});

app.listen(5080);
