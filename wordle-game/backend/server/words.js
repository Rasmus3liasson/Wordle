import express from "express";
import { wordList } from "../wordsFolder/words.js";

const words = express.Router();

words.get("/", async (req, res) => {
  res.status(200).json({
    data: {
      wordList: wordList,
    },
  });
});

export default words;
