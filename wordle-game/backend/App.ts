import express from "express";
import highscoreData from "./src/server/highscoreData";
import routesHighscore from "./src/server/routesHighscore";
import randomWord from "./src/server/randomWord";
import settings from "./src/server/settings";

import fs from "fs";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static("../frontend/build"));
app.use("/dist", express.static("./dist"));
app.set("view engine", "ejs");
app.use(cors());

//api, highscore filters, settings and randomword
app.use("/api/highscoredata", highscoreData);
app.use("/api/randomword", randomWord);
app.use("/api/settings", settings);
app.use("/highscore", routesHighscore);

app.get("/information", (req, res) => {
  res.render("information", { currentPage: "information" });
});

app.get("/game", (req, res) => {
  fs.readFile("../frontend/build/index.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send("Couldn't read file");
    } else {
      res.send(data);
    }
  });
});

app.listen(5080);
