import React from "react";
import { Fragment, useState } from "react";
import ChooseLength from "./ChooseLength.tsx";
import UniqueLetters from "./UniqueLetters.tsx";

export default function Modal({
  setModal,
  selectLength,
  setSelectLength,
  uniqueLetters,
  setUniqueLetters,
}) {
  return (
    <div className="fixed">
      <div className="flex items-center justify-center pt-4 px-4 pb-20 text-center">
        {/*  <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-200 opacity-75"></div>
      </div> */}

        <div className=" flex justify-center transform transition-all">
          <div className="bg-dark px-4 pt-5 pb-4 rounded-lg">
            <h3 className="text-center text-3xl font-medium">
              Dina inställningar
            </h3>
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
                }}
                className="button"
              >
                Starta Spelet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
