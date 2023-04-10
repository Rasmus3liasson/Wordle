import mongoose from "mongoose";

const HighScore = mongoose.model("highscoreData", {
  name: String,
  time: String,
  guesses: Number,
  wordLength: Number,
  excludeUniqueLetters: Boolean,
});

export default HighScore;
