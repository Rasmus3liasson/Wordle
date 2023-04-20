import express from "express";
import { wordList } from "../wordsFolder/words";
import generateRandomWord from "./functions/generateRandomWord";

const randomWord = express.Router();

interface SettingData {
  settingData: {
    wordLength: string;
    excludeUniqueLetters: boolean;
  }[];
}

randomWord.get("/", async (req, res) => {
  //was able to make this instead of fetching a hardcoded path, dont know why can't use /api/settings
  const startUrl = `${req.protocol}://${req.get("host")}`;
  const response = await fetch(`${startUrl}/api/settings`);
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
