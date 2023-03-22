import React from "react";

export default function Keyboard() {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Å"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"];
  const row3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DELETE"];

  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div className="flex gap-1 mb-2">
        {row1.map((keyLetter) => {
          return (
            <div className="key-caps">
              <p className="text-white text-xl">{keyLetter}</p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-1 mb-2">
        {row2.map((keyLetter) => {
          return (
            <div className="key-caps">
              <p className="text-white text-xl">{keyLetter}</p>
            </div>
          );
        })}
      </div>
      <div className="flex gap-1 mb-2">
        {row3.map((keyLetter) => {
          return (
            <div className="key-caps">
              <p className="text-white text-xl">{keyLetter}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
