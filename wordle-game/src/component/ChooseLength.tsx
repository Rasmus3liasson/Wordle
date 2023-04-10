import React from "react";

interface Props {
  selectLength: number;
  setSelectLength: (value: number) => void;
}

export default function ChooseLength({ selectLength, setSelectLength }: Props) {
  function newSelectValue(event) {
    setSelectLength(event.target.value);
  }

  return (
    <div>
      <h4>Hur många bokstäver?</h4>
      <select value={selectLength} onChange={newSelectValue}>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
}
