import React, { useEffect, useState } from "react";

interface Props {
  backgroundColor: string;
  boardStartLength: number;
  row: number;
  letterWord: string;
  state: string[];
  randomWord: string;
  setGameInPlay;
  handleGuessCount: (number: number) => void;
  setState: (letters: string[]) => void;
}

export default function BoardBox({
  backgroundColor,
  boardStartLength,
  row,
  letterWord,
  state,
  randomWord,
  handleGuessCount,
  setState,
  setGameInPlay,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  let boxColor = backgroundColor || "bg-dark";

  function handleKeyPress(event: { key: string; keyCode: number }) {
    //new array to make letters stay
    let arr = [...state];

    // when boardrow is filled, then function will move to next row
    if (arr.length === boardStartLength) {
      return;
    }

    //passing row number to function that set new value to guess
    const guessCount = row;
    handleGuessCount(guessCount);

    arr[activeIndex] = event.key.toUpperCase();

    //disallowed keys
    const notAllowed = [
      13,
      8,
      192,
      9,
      20,
      16,
      17,
      18,
      91,
      93,
      18,
      38,
      37,
      40,
      39,
      ,
      187,
      27,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      123,
    ];
    //only allow letters and no enter or delete key letters
    if (
      arr[activeIndex].match("[A-Öa-ö]") &&
      !notAllowed.includes(event.keyCode)
    ) {
      setState(arr);
    } else {
      return false;
    }

    if (activeIndex < boardStartLength) {
      setActiveIndex(activeIndex + 1);
    }

    // removing the board if correct word is guessed
    let check = arr.toString().replace(/,/g, "");
    if (check === randomWord) {
      setGameInPlay(false);
    }

    if (arr.length === boardStartLength) {
      arr = [];
    }
  }
  useEffect(() => {
    let guess = state.toString().replace(/,/g, "");
    document.addEventListener("keydown", handleKeyPress);

    if (guess.length === boardStartLength && guess === randomWord) {
      document.removeEventListener("keydown", handleKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  });

  return (
    <div
      id="background-color"
      className={`w-12 h-12 md:w-20 md:h-20 p-2 flex items-center justify-center rounded-lg shadow-box hover:scale-103 duration-150 ${boxColor}`}
      onKeyDown={handleKeyPress}
    >
      <p id="box-letter" className="text-white text-3xl md:text-4xl font ">
        {letterWord}
      </p>
    </div>
  );
}
