import React from "react";
import { Fragment } from "react";
import ChooseLength from "./ChooseLength.tsx";
import UniqueLetters from "./UniqueLetters.tsx";

export default function Modal({
  setModal,
  selectLength,
  setSelectLength,
  uniqueLetters,
  setUniqueLetters,
}) {
  function sendSettings() {
    //parse int to change string value from option
    const settingData = {
      data: [
        { wordLength: parseInt(selectLength) },
        { excludeUniqueLetters: uniqueLetters },
      ],
    };

    //post setting based on user input
    fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settingData),
    });
  }

  return (
    <div className="pt-4 px-4 pb-20 text-center fixed md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/3">
      <div className="bg-dark px-4 pt-5 pb-4 rounded-lg md:scale-125">
        <h3 className="text-center text-3xl font-medium">Dina inställningar</h3>
        <div>
          <Fragment>
            <ChooseLength
              selectLength={selectLength}
              setSelectLength={setSelectLength}
            />
            <UniqueLetters
              uniqueLetters={uniqueLetters}
              setUniqueLetters={setUniqueLetters}
            />
          </Fragment>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => {
              setModal(false);
              sendSettings();
            }}
            className="button"
          >
            Starta Spelet
          </button>
        </div>
      </div>
    </div>
  );
}
