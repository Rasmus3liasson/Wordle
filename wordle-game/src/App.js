import React from "react";
import Board from "./component/Board.tsx";
import { BoardStart } from "./component/BoardStart.tsx";
import Keyboard from "./component/Keyboard.tsx";

function App() {
  const boardStart = BoardStart();

  return (
    <div className="App font-montserrat h-full p-0 box-border scroll-smooth">
      <div className="border-b-4 pb-7">
        <h1 className="text-7xl text-center mt-7 ">Wordle</h1>
      </div>

      <div className="mt-12">
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board letter={letter} key={index} />
          ))}
        </div>
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board letter={letter} key={index} />
          ))}
        </div>
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board letter={letter} key={index} />
          ))}
        </div>
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board letter={letter} key={index} />
          ))}
        </div>
        <div className="board-rows">
          {boardStart.map((letter, index) => (
            <Board letter={letter} key={index} />
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
