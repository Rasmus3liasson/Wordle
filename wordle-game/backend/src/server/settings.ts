import express from "express";

const settings = express.Router();

//user choice of length och uniqueletters
let settingData: null = null;
settings.post("/", (req, res) => {
  settingData = req.body.data;

  res.send("Settings received");
});
settings.get("/", (req, res) => {
  res.json({ settingData: settingData });
});

export default settings;
