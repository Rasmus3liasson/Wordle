import React from "react";

const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"];
const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"];
const row3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"];

export function clickKeyBoard(event) {
  const keys = [...row1, ...row2, ...row3];
  const clickKey = event.target.innerText;

  if (clickKey == "ENTER") {
    return;
  }
  if (clickKey == "DELETE") {
    return;
  }
  //condition to not be able to click beetween keys
  if (keys.includes(clickKey)) {
    console.log(clickKey);
  }
}

export function Keyboard() {
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="flex gap-1 mb-2">
        {row1.map((keyLetter, index) => {
          return (
            <div className="key-caps" key={index}>
              <button className="text-white text-xl">{keyLetter}</button>
            </div>
          );
        })}
      </div>
      <div className="flex gap-1 mb-2">
        {row2.map((keyLetter, index) => {
          return (
            <div className="key-caps" key={index}>
              <button className="text-white text-xl">{keyLetter}</button>
            </div>
          );
        })}
      </div>
      <div className="flex gap-1 mb-2">
        {row3.map((keyLetter, index) => {
          return (
            <div className="key-caps" key={index}>
              <button className="text-white text-xl">{keyLetter}</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
