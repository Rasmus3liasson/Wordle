import express from "express";
import mongoose from "mongoose";
import HighScore from "./schema.js";

const highscoreData = express.Router();

highscoreData.get("/", async (req, res) => {
  const conn = await mongoose.connect(process.env.HighscoreDatabas);
  //sort by fastest time
  const highscoreData = await HighScore.find().sort({ time: 1 });
  conn.disconnect();

  res.status(200).json({
    highscoreList: highscoreData,
  });
});

highscoreData.post("/", async (req, res) => {
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

export default highscoreData;
