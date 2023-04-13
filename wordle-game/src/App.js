import React, { useState, useEffect, Fragment } from "react";
import BoardRow from "./component/BoardRow.tsx";
import { boardStart } from "./functions/boardStart.ts";
import { Keyboard } from "./component/Keyboard.tsx";
import { checkGuess } from "./functions/checkGuess.ts";
import Clock from "./component/Clock.tsx";
import CompletedResult from "./component/CompletedResult.tsx";
import FailedResult from "./component/FailedResult.tsx";
import Nav from "./component/Nav.tsx";
import Modal from "./component/Modal.tsx";

function App() {
  const [numberGuess, setNumberGuess] = useState(1);
  const [selectLength, setSelectLength] = useState(5);
  const [randomWord, setRandomWord] = useState("");
  const [uniqueLetters, setUniqueLetters] = useState(true);
  const [time, setTime] = useState("00:00:00");
  const [letterGuess, setLetterGuess] = useState("");
  const [letterGuess2, setLetterGuess2] = useState("");
  const [letterGuess3, setLetterGuess3] = useState("");
  const [letterGuess4, setLetterGuess4] = useState("");
  const [letterGuess5, setLetterGuess5] = useState("");
  const [letterGuess6, setLetterGuess6] = useState("");
  const [modal, setModal] = useState(true);
  const [gameInPlay, setGameInPlay] = useState(true);

  let row = 0;
  const boardLength = boardStart(selectLength);

  const settingData = {
    data: [
      { wordLength: selectLength },
      { excludeUniqueLetters: uniqueLetters },
    ],
  };

  fetch("http://localhost:5080/api/settings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(settingData),
  });

  async function retrieveRandomWord() {
    const res = await fetch("http://localhost:5080/api/randomword");
    const data = await res.json();
    const randomWord = data.data.randomWord;
    console.log(data.data.randomWord);

    setRandomWord(randomWord);
  }

  //change randomword with game settings changes
  useEffect(() => {
    retrieveRandomWord();
  }, [selectLength, uniqueLetters]);

  let valueColor;
  let arrToString;

  function setColorBox(word, index) {
    if (word.length === boardLength.length) {
      arrToString = word.toString().replace(/,/g, "");
      valueColor = checkGuess(arrToString, randomWord);

      if (valueColor[index] === "misplaced") {
        return "yellow-color";
      } else if (valueColor[index] === "correct") {
        return "green-color";
      } else {
        return "red-color";
      }
    }
  }

  //calling function so arrToString value isn't undefined so Clock component hava acces to the variable
  useEffect(() => {
    setColorBox(letterGuess);
    setColorBox(letterGuess2);
    setColorBox(letterGuess3);
    setColorBox(letterGuess4);
    setColorBox(letterGuess5);
    setColorBox(letterGuess6);
  }, [
    letterGuess,
    letterGuess2,
    letterGuess3,
    letterGuess4,
    letterGuess5,
    letterGuess6,
  ]);

  if (letterGuess.length === boardLength.length) {
    row++;
  }

  const handleTime = (newTime) => {
    setTime(newTime);
  };

  //function to set value of how many guesses
  function handleGuessCount(count) {
    setNumberGuess(count);
  }

  return (
    <div className="App font-montserrat m-0 h-full p-0 box-border scroll-smooth bg-dark text-white">
      <div className="border-b-4 pb-7">
        <h1 className="text-7xl text-center pt-7">Wordle</h1>
        <div>
          <Nav />
        </div>
      </div>

      {modal && (
        <Modal
          selectLength={selectLength}
          setSelectLength={setSelectLength}
          uniqueLetters={uniqueLetters}
          setUniqueLetters={setUniqueLetters}
          setModal={setModal}
        />
      )}
      {!modal && (
        <div>
          <div className="mt-12">
            {gameInPlay && (
              <>
                <div>
                  <Clock
                    setTime={setTime}
                    handleTime={handleTime}
                    firstWord={letterGuess}
                    guessWord={arrToString}
                    randomWord={randomWord}
                    lastGuess={letterGuess6.length}
                    boardStartLength={boardLength.length}
                  />
                </div>
                <div>
                  <div className="board-rows">
                    {boardLength.map((letter, index) => (
                      <BoardRow
                        setGameInPlay={setGameInPlay}
                        randomWord={randomWord}
                        backgroundColor={setColorBox(letterGuess, index)}
                        state={letterGuess}
                        setState={setLetterGuess}
                        key={index}
                        letterWord={letterGuess[index]}
                        boardStartLength={boardLength.length}
                        row={1}
                        handleGuessCount={handleGuessCount}
                      />
                    ))}
                  </div>
                  <div className="board-rows">
                    {boardLength.map((letter, index) => (
                      <BoardRow
                        setGameInPlay={setGameInPlay}
                        randomWord={randomWord}
                        backgroundColor={setColorBox(letterGuess2, index)}
                        state={letterGuess2}
                        setState={setLetterGuess2}
                        key={index}
                        letterWord={row === 1 ? letterGuess2[index] : ""}
                        boardStartLength={boardLength.length}
                        row={2}
                        handleGuessCount={handleGuessCount}
                      />
                    ))}
                  </div>
                  <div className="board-rows">
                    {boardLength.map((letter, index) => (
                      <BoardRow
                        setGameInPlay={setGameInPlay}
                        randomWord={randomWord}
                        backgroundColor={setColorBox(letterGuess3, index)}
                        state={letterGuess3}
                        setState={setLetterGuess3}
                        key={index}
                        letterWord={row === 1 ? letterGuess3[index] : ""}
                        boardStartLength={boardLength.length}
                        row={3}
                        handleGuessCount={handleGuessCount}
                      />
                    ))}
                  </div>
                  <div className="board-rows">
                    {boardLength.map((letter, index) => (
                      <BoardRow
                        setGameInPlay={setGameInPlay}
                        randomWord={randomWord}
                        backgroundColor={setColorBox(letterGuess4, index)}
                        state={letterGuess4}
                        setState={setLetterGuess4}
                        key={index}
                        letterWord={row === 1 ? letterGuess4[index] : ""}
                        boardStartLength={boardLength.length}
                        row={4}
                        handleGuessCount={handleGuessCount}
                      />
                    ))}
                  </div>
                  <div className="board-rows">
                    {boardLength.map((letter, index) => (
                      <BoardRow
                        setGameInPlay={setGameInPlay}
                        randomWord={randomWord}
                        backgroundColor={setColorBox(letterGuess5, index)}
                        state={letterGuess5}
                        setState={setLetterGuess5}
                        key={index}
                        letterWord={row === 1 ? letterGuess5[index] : ""}
                        boardStartLength={boardLength.length}
                        row={5}
                        handleGuessCount={handleGuessCount}
                      />
                    ))}
                  </div>
                  <div className="board-rows">
                    {boardLength.map((letter, index) => (
                      <BoardRow
                        setGameInPlay={setGameInPlay}
                        randomWord={randomWord}
                        backgroundColor={setColorBox(letterGuess6, index)}
                        state={letterGuess6}
                        setState={setLetterGuess6}
                        key={index}
                        letterWord={row === 1 ? letterGuess6[index] : ""}
                        boardStartLength={boardLength.length}
                        row={6}
                        handleGuessCount={handleGuessCount}
                      />
                    ))}
                  </div>
                </div>
                {letterGuess6.length >= boardLength.length &&
                arrToString !== randomWord ? (
                  <FailedResult randomWord={randomWord} />
                ) : null}
              </>
            )}
          </div>
          {!gameInPlay && (
            <div className="mt-12">
              <CompletedResult
                randomWord={randomWord}
                uniqueLetters={uniqueLetters}
                selectLength={selectLength}
                guessCount={numberGuess}
                time={time}
              />
            </div>
          )}

          <Fragment>
            <Keyboard />
          </Fragment>
        </div>
      )}
    </div>
  );
}

export default App;
