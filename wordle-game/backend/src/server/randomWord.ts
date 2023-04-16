import express from "express";
import { wordList } from "../wordsFolder/words";
import { generateRandomWord } from "./functions/generateRandomWord";
import fetch from "node-fetch";

const randomWord = express.Router();

interface SettingData {
  settingData: {
    wordLength: string;
    excludeUniqueLetters: boolean;
  }[];
}

randomWord.get("/", async (req, res) => {
  //Only works with hardcoded path, dont know why
  const response = await fetch("http://localhost:5080/settings");
  const data = (await response.json()) as SettingData;

  let settingLength = parseInt(data.settingData[0].wordLength);
  let settingUniqueLetters = data.settingData[1].excludeUniqueLetters;

  const generatedRandomWord = generateRandomWord(
    wordList.toUpperCase().split(" "),
    settingLength,
    settingUniqueLetters
  );

  res.status(200).json({
    data: {
      randomWord: generatedRandomWord,
    },
  });
});

export default randomWord;
