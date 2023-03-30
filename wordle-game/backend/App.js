import express from "express";

const app = express();

app.use(express.json());

app.get("/hej", (req, res) => {
  res.status(201).send("hello World");
});

app.listen(5080);
