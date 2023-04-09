import React, { useState } from "react";

interface Props {
  time: number;
  guessCount: number;
  selectValue: number;
  uniqueLetters: boolean;
}

export default function CompletedResult({
  time,
  guessCount,
  selectValue,
  uniqueLetters,
}: Props) {
  const [nameValue, setNameValue] = useState("");

  function submit(event) {
    event.preventDefault();

    if (nameValue !== "") {
      const highscoreData = {
        name: nameValue,
        time: time,
        guesses: guessCount,
        wordLength: selectValue,
        excludeUniqueLetters: uniqueLetters,
      };

      fetch("http://localhost:5080/api/highscoredata", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(highscoreData),
      });
    }
  }
  function setValueInput(event) {
    setNameValue(event.target.value);
  }

  return (
    <div className="text-center mt-6">
      <h3>Grattis</h3>
      <div className="flex flex-col justify-center">
        <form action="" onSubmit={submit}>
          <label aria-label="Fyll i ditt namn">Fyll i ditt namn</label>
          <input onChange={setValueInput} id="name-input" type="text" />
          <button type="submit">Lämna in</button>
        </form>
      </div>
    </div>
  );
}
