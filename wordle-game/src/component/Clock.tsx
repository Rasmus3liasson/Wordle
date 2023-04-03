import React, { useState, useEffect } from "react";

export default function Clock(props) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    //stop timer
    if (
      props.guessWord === props.randomWord ||
      props.lastGuess >= props.boardStartLength
    ) {
      return;
    }

    //start when letter has been entered
    if (props.firstWord.length >= 1) {
      const intervalId = setInterval(() => {
        setSecond((second) => second + 1);
        const newTime = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}:${(second + 1).toString().padStart(2, "0")}`;
        props.handleTime(newTime);
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
    props.setTime(
      `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}:${second.toString().padStart(2, "0")}`
    );
  });

  return (
    <div>
      <p>
        {" "}
        {hour.toString().padStart(2, "0")}:{minute.toString().padStart(2, "0")}:
        {second.toString().padStart(2, "0")}
      </p>
    </div>
  );
}
