import React, { useState } from "react";
import Board from "./component/Board.tsx";
import { BoardStart } from "./component/BoardStart.tsx";
import { Keyboard } from "./component/Keyboard.tsx";
import { checkGuess } from "./component/checkGuess.js";
import { generateRandomWord } from "./component/randomWord.js";

function App() {
  const foodList = "Biffa Marcu Polle".split(" ");

  const boardStart = BoardStart();

  const [letterGuess, setLetterGuess] = useState("");
  const [letterGuess2, setLetterGuess2] = useState("");
  const [letterGuess3, setLetterGuess3] = useState("");
  const [letterGuess4, setLetterGuess4] = useState("");
  const [letterGuess5, setLetterGuess5] = useState("");
  const [letterGuess6, setLetterGuess6] = useState("");

  let row = 0;
  const randomWord = generateRandomWord(foodList, 5);
  let valueColor;

  function convertToString(word, event) {
    if (word.length == 5) {
      let arrToString = word.toString().replace(/,/g, "");
      valueColor = arrToString;

      valueColor = checkGuess(arrToString, "solen");

      if (valueColor.includes("misplaced")) {
        return "yellow-color";
      } else if (valueColor.includes("correct")) {
        return "green-color";
      } else {
        return "bg-dark";
      }
    }
  }

  if (letterGuess.length === 5) {
    row++;
  }

  let backgroundColor = convertToString(letterGuess);
  let backgroundColor2 = convertToString(letterGuess2);
  let backgroundColor3 = convertToString(letterGuess3);
  let backgroundColor4 = convertToString(letterGuess4);
  let backgroundColor5 = convertToString(letterGuess5);
  let backgroundColor6 = convertToString(letterGuess6);

  return (
    <div className="App font-montserrat h-full p-0 box-border scroll-smooth">
      <div className="border-b-4 pb-7">
        <h1 className="text-7xl text-center mt-7">Wordle</h1>
      </div>

      <div className="mt-12">
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              backgroundColor={backgroundColor}
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
              backgroundColor={backgroundColor2}
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
              backgroundColor={backgroundColor3}
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
              backgroundColor={backgroundColor4}
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
              backgroundColor={backgroundColor5}
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
              backgroundColor={backgroundColor6}
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
