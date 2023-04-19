import React, { useState } from "react";

interface Props {
  time: number;
  guessCount: number;
  selectLength: number;
  uniqueLetters: boolean;
  randomWord: string;
}

export default function CompletedResult({
  time,
  guessCount,
  selectLength,
  uniqueLetters,
  randomWord,
}: Props) {
  const [nameValue, setNameValue] = useState("");
  const [nameText, setNameText] = useState("Fyll i ditt namn");
  const [sendHighscore, setSendHighscore] = useState(false);

  function submit(event: { preventDefault: () => void }) {
    event.preventDefault();

    if (nameValue !== "") {
      const highscoreData = {
        name: nameValue,
        time: time,
        guesses: guessCount,
        wordLength: selectLength,
        excludeUniqueLetters: uniqueLetters,
      };

      fetch("/api/highscoredata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(highscoreData),
      });

      setSendHighscore(true);
    } else {
      setNameText("Du måste ange ett namn");
    }
  }
  function setValueInput(event) {
    setNameValue(event.target.value);
  }

  return (
    <div className="text-center mt-6">
      {sendHighscore ? (
        <p className="text-3xl">Tack för din inlämningen!</p>
      ) : (
        <div className="flex justify-center items-center">
          <form
            className="flex flex-col md:flex-row gap-7 md:gap-24"
            action=""
            onSubmit={submit}
          >
            <div className="text-xl">
              <h2 className="text-2xl">Grattis du klarade det!</h2>
              <h3>
                Ordet var:{" "}
                <span className="font-bold mt-2 text-2xl">{randomWord}</span>
              </h3>
              <h3>Din tid: {time}</h3>
              <h3>Ordets längd: {selectLength}</h3>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-3xl" aria-label="Fyll i ditt namn">
                {nameText}
              </label>
              <input
                className="shadow-lg h-9 md:h-12 rounded-lg text-dark text-xl pl-4"
                onChange={setValueInput}
                id="name-input"
                type="text"
              />
            </div>

            <div>
              <button className="button" type="submit">
                Lämna in
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
