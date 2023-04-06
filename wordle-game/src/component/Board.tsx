import React, { useEffect, useState } from "react";

interface Props {
  backgroundColor: string;
  boardStartLength: number;
  row: number;
  letterWord: string;
  state: string[];
  randomWord: string;
  handleGuessCount: (number: number) => void;
  setState: (letters: string[]) => void;
}

export default function Board(props: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  let backgroundColor = props.backgroundColor || "bg-dark";

  function handleKeyPress(event) {
    //new array to make letters stay
    let arr = [...props.state];

    // when boardrow is filled, then function will move to next row
    if (arr.length === props.boardStartLength) {
      return;
    }

    //passing row number to function that set new value to guess
    const guessCount = props.row;
    props.handleGuessCount(guessCount);

    arr[activeIndex] = event.key.toUpperCase();

    //only allow letters and no enter key letters
    if (arr[activeIndex].match("[A-Öa-ö]") && event.keyCode !== 13) {
      props.setState(arr);
    } else {
      return false;
    }
    if (activeIndex < props.boardStartLength) {
      setActiveIndex(activeIndex + 1);
    }
    if (arr.length === props.boardStartLength) {
      arr = [];
    }
  }

  useEffect(() => {
    let guess = props.state.toString().replace(/,/g, "");
    if (guess.length === 5 && guess === props.randomWord) {
      document.removeEventListener("keypress", handleKeyPress);
    } else {
      document.addEventListener("keypress", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  return (
    <div
      id="background-color"
      className={`w-20 h-20 p-2 flex items-center justify-center rounded-lg shadow-box ${backgroundColor}`}
    >
      <p id="box-letter" className="text-white text-4xl font">
        {props.letterWord}
      </p>
    </div>
  );
}
