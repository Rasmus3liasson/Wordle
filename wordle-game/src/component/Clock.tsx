import React, { useState, useEffect } from "react";

interface Props {
  guessWord: string;
  randomWord: string;
  lastGuess: number;
  boardStartLength: number;
  firstWord: string;
  handleTime: (time: string) => void;
  setTime: (time: string) => void;
}

export default function Clock({
  guessWord,
  randomWord,
  lastGuess,
  boardStartLength,
  firstWord,
  handleTime,
  setTime,
}: Props) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    //stop timer
    if (guessWord === randomWord || lastGuess >= boardStartLength) {
      return;
    }

    //start when letter has been entered
    if (firstWord.length >= 1) {
      const intervalId = setInterval(() => {
        setSecond((second) => second + 1);
        const newTime = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}:${(second + 1).toString().padStart(2, "0")}`;
        handleTime(newTime);
      }, 1000);

      // Clean up
      return () => clearInterval(intervalId);
    }
  });

  //updates if they overlaps
  if (second === 60) {
    setSecond(0);
    setMinute((minutes) => minutes + 1);
  }
  if (minute === 60) {
    setMinute(0);
    setHour((hours) => hours + 1);
  }

  // update the time state
  useEffect(() => {
    setTime(
      `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}:${second.toString().padStart(2, "0")}`
    );
  });

  return (
    <div className="flex flex-col items-center mt-5">
      <p className="text-2xl">
        {" "}
        {hour.toString().padStart(2, "0")}:{minute.toString().padStart(2, "0")}:
        {second.toString().padStart(2, "0")}
      </p>
    </div>
  );
}
