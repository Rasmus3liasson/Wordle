import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const HighscoreSchema = new Schema({
  name: { type: String },
  time: { type: String },
  guesses: { type: Number },
  wordLength: { type: Number },
  excludeUniqueLetters: { type: Boolean },
});

const HighScore = mongoose.model("highscoreData", HighscoreSchema);

export default HighScore;
