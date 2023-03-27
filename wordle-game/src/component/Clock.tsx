import React, { useState, useEffect } from "react";

export default function Clock(props) {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  useEffect(() => {
    //start when letter has been entered
    if (props.firstWord.length >= 1) {
      const intervalId = setInterval(() => {
        setSecond((s) => s + 1);
      }, 1000);

      // Clean up the interval when the component is unmounted
      return () => clearInterval(intervalId);
    }
  }, [props.firstWord.length]);

  // Update the minute and hour values if necessary
  if (second === 60) {
    setSecond(0);
    setMinute((m) => m + 1);
  }
  if (minute === 60) {
    setMinute(0);
    setHour((h) => h + 1);
  }

  return (
    <div>
      {hour.toString().padStart(2, "0")}:{minute.toString().padStart(2, "0")}:
      {second.toString().padStart(2, "0")}
    </div>
  );
}
