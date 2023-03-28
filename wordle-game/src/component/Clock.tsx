import React, { useState, useEffect } from "react";

export default function Clock(props) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    if (props.guessWord == props.randomWord) {
      return;
    }

    //start when letter has been entered
    if (props.firstWord.length >= 1) {
      const intervalId = setInterval(() => {
        setSecond((second) => second + 1);
      }, 1000);

      // Clean up
      return () => clearInterval(intervalId);
    }
  }, [props.firstWord.length, props.guessWord, props.randomWord]);

  //updates if they overlaps
  if (second === 60) {
    setSecond(0);
    setMinute((minutes) => minutes + 1);
  }
  if (minute === 60) {
    setMinute(0);
    setHour((hours) => hours + 1);
  }

  return (
    <div>
      {hour.toString().padStart(2, "0")}:{minute.toString().padStart(2, "0")}:
      {second.toString().padStart(2, "0")}
    </div>
  );
}
