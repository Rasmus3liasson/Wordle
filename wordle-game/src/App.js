import React, { useState, useEffect } from "react";
import Board from "./component/Board.tsx";
import { BoardStart } from "./component/BoardStart.tsx";
import { Keyboard } from "./component/Keyboard.tsx";
import { checkGuess } from "./component/checkGuess.js";
import { generateRandomWord } from "./component/randomWord.js";
import Clock from "./component/Clock.tsx";
import CompletedResult from "./component/CompletedResult.tsx";
import FailedResult from "./component/FailedResult.tsx";
import ChooseLength from "./component/ChooseLength.tsx";
import UniqueLetters from "./component/UniqueLetters.tsx";
import Nav from "./component/Nav.tsx";

function App() {
  const [selectValue, setSelectValue] = useState("5");
  const [randomWord, setRandomWord] = useState("");
  const [uniqueLetters, setUniqueLetters] = useState(true);
  const [letterGuess, setLetterGuess] = useState("");
  const [letterGuess2, setLetterGuess2] = useState("");
  const [letterGuess3, setLetterGuess3] = useState("");
  const [letterGuess4, setLetterGuess4] = useState("");
  const [letterGuess5, setLetterGuess5] = useState("");
  const [letterGuess6, setLetterGuess6] = useState("");

  let row = 0;
  const boardStart = BoardStart(selectValue);

  async function getRandomWord() {
    const res = await fetch("/words");
    const data = await res.json();
    const words = data.data.wordList;
    const randomWord = generateRandomWord(
      words.toUpperCase().split(" "),
      selectValue,
      uniqueLetters
    );

    setRandomWord(randomWord);
    console.log(randomWord);
  }

  useEffect(() => {
    getRandomWord();
  }, []);

  let valueColor;
  let arrToString;

  function setColorBox(word, index) {
    if (word.length === boardStart.length) {
      arrToString = word.toString().replace(/,/g, "");
      valueColor = checkGuess(arrToString, randomWord);

      if (valueColor[index] === "misplaced") {
        return "yellow-color";
      } else if (valueColor[index] === "correct") {
        return "green-color";
      } else {
        return "bg-dark";
      }
    }
  }

  //calling function so arrToString value isn't undefined so Clock component hava acces to the variable
  setColorBox(letterGuess);
  setColorBox(letterGuess2);
  setColorBox(letterGuess3);
  setColorBox(letterGuess4);
  setColorBox(letterGuess5);
  setColorBox(letterGuess6);

  if (letterGuess.length === boardStart.length) {
    row++;
  }

  return (
    <div className="App font-montserrat h-full p-0 box-border scroll-smooth">
      <div className="border-b-4 pb-7">
        <h1 className="text-7xl text-center mt-7">Wordle</h1>
        <div>
          <Nav />
        </div>
      </div>

      <div>
        <ChooseLength
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />
      </div>
      <div>
        <UniqueLetters
          uniqueLetters={uniqueLetters}
          setUniqueLetters={setUniqueLetters}
        />
      </div>

      <div>
        <Clock
          firstWord={letterGuess}
          guessWord={arrToString}
          randomWord={randomWord}
          lastGuess={letterGuess6.length}
          boardStartLength={boardStart.length}
        />
      </div>

      <div className="mt-12">
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              backgroundColor={setColorBox(letterGuess, index)}
              state={letterGuess}
              setState={setLetterGuess}
              letter={letter}
              key={index}
              letterWord={letterGuess[index]}
              boardStartLength={boardStart.length}
            />
          ))}
        </div>

        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              backgroundColor={setColorBox(letterGuess2, index)}
              state={letterGuess2}
              setState={setLetterGuess2}
              letter={letter}
              key={index}
              letterWord={row === 1 ? letterGuess2[index] : ""}
              boardStartLength={boardStart.length}
            />
          ))}
        </div>
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              backgroundColor={setColorBox(letterGuess3, index)}
              state={letterGuess3}
              setState={setLetterGuess3}
              letter={letter}
              key={index}
              letterWord={row === 1 ? letterGuess3[index] : ""}
              boardStartLength={boardStart.length}
            />
          ))}
        </div>
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              backgroundColor={setColorBox(letterGuess4, index)}
              state={letterGuess4}
              setState={setLetterGuess4}
              letter={letter}
              key={index}
              letterWord={row === 1 ? letterGuess4[index] : ""}
              boardStartLength={boardStart.length}
            />
          ))}
        </div>
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              backgroundColor={setColorBox(letterGuess5, index)}
              state={letterGuess5}
              setState={setLetterGuess5}
              letter={letter}
              key={index}
              letterWord={row === 1 ? letterGuess5[index] : ""}
              boardStartLength={boardStart.length}
            />
          ))}
        </div>
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board
              backgroundColor={setColorBox(letterGuess6, index)}
              state={letterGuess6}
              setState={setLetterGuess6}
              letter={letter}
              key={index}
              letterWord={row === 1 ? letterGuess6[index] : ""}
              boardStartLength={boardStart.length}
            />
          ))}
        </div>
      </div>
      {
        <div>
          {arrToString == randomWord ? <CompletedResult /> : null}
          {letterGuess6.length >= boardStart.length &&
          arrToString != randomWord ? (
            <FailedResult randomWord={randomWord} />
          ) : null}
        </div>
      }

      <div>
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
