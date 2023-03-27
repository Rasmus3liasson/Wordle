import React, { useState } from "react";
import Board from "./component/Board.tsx";
import { BoardStart } from "./component/BoardStart.tsx";
import { Keyboard } from "./component/Keyboard.tsx";

function App() {
  const boardStart = BoardStart();
  const [letterGuess, setLetterGuess] = useState("");
  const [letterGuess2, setLetterGuess2] = useState("");
  const [letterGuess3, setLetterGuess3] = useState("");
  const [letterGuess4, setLetterGuess4] = useState("");
  const [letterGuess5, setLetterGuess5] = useState("");
  const [letterGuess6, setLetterGuess6] = useState("");
  let row = 0;

  if (letterGuess.length === 5) {
    row++;
  }

  return (
    <div className="App font-montserrat h-full p-0 box-border scroll-smooth">
      <div className="border-b-4 pb-7">
        <h1 className="text-7xl text-center mt-7">Wordle</h1>
      </div>

      <div className="mt-12">
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              state={letterGuess}
              setState={setLetterGuess}
              letter={letter}
              key={index}
              letterWord={letterGuess[index]}
            />
          ))}
        </div>

        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              state={letterGuess2}
              setState={setLetterGuess2}
              letter={letter}
              key={index}
              letterWord={row === 1 ? letterGuess2[index] : ""}
            />
          ))}
        </div>
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              state={letterGuess3}
              setState={setLetterGuess3}
              letter={letter}
              key={index}
              letterWord={row === 1 ? letterGuess3[index] : ""}
            />
          ))}
        </div>
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              state={letterGuess4}
              setState={setLetterGuess4}
              letter={letter}
              key={index}
              letterWord={row === 1 ? letterGuess4[index] : ""}
            />
          ))}
        </div>
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              state={letterGuess5}
              setState={setLetterGuess5}
              letter={letter}
              key={index}
              letterWord={row === 1 ? letterGuess5[index] : ""}
            />
          ))}
        </div>
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              state={letterGuess6}
              setState={setLetterGuess6}
              letter={letter}
              key={index}
              letterWord={row === 1 ? letterGuess6[index] : ""}
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
