import express from "express";
import fs from "fs";
import { wordsCopy } from "./wordsFolder/words.js";

const app = express();

app.use(express.json());
app.use(express.static("../build"));

app.get("/highscore", (req, res) => {
  fs.readFile("./highScore.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send("Couldn't read file");
    } else {
      res.send(data);
    }
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
      wordList: wordsCopy,
    },
  });
});

app.listen(5080);
