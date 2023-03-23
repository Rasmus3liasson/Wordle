import React, { useState, useEffect } from "react";
import Board from "./component/Board.tsx";
import { BoardStart } from "./component/BoardStart.tsx";
import Keyboard from "./component/Keyboard.tsx";

/* import handleKeyEvents from "./component/handleKeyEvents.tsx"; */

function App() {
  const boardStart = BoardStart();

  const [activeIndex, setActiveIndex] = useState(0);

  const [letterGuess, setLetterGuess] = useState("");

  useEffect(() => {
    function handleKeyPress(event) {
      //new array to make letters stay
      const arr = [...letterGuess];

      // when array contains 5 letters, then function won't work
      if (arr.length === 5) {
        return;
      }

      arr[activeIndex] = event.key.toUpperCase();

      setLetterGuess(arr);

      if (activeIndex < 4) {
        setActiveIndex(activeIndex + 1);
      }
    }

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  return (
    <div className="App font-montserrat h-full p-0 box-border scroll-smooth">
      <div className="border-b-4 pb-7">
        <h1 className="text-7xl text-center mt-7">Wordle</h1>
      </div>

      <div className="mt-12">
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              letterWord={letterGuess[index]}
              letter={letter}
              key={index}
            />
          ))}
        </div>
      </div>
      <div>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
