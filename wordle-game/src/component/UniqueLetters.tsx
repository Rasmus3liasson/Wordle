import React from "react";

interface Props {
  uniqueLetters: boolean;
  setUniqueLetters: (value: boolean) => void;
}

export default function UniqueLetters({
  uniqueLetters,
  setUniqueLetters,
}: Props) {
  function changeUniqueLetters(event) {
    if (event.target.value === "true") {
      setUniqueLetters(true);
    } else {
      setUniqueLetters(event.target.value === "true");
    }
  }

  return (
    <div className="flex flex-col items-center mt-5">
      <h4 className="text-xl">exclude same letters more than once</h4>
      <select
        className="select"
        value={uniqueLetters.toString()}
        onChange={changeUniqueLetters}
      >
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div>
  );
}
