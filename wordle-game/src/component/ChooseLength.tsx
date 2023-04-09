import React from "react";

interface Props {
  selectValue: number;
  setSelectValue: (value: number) => void;
}

export default function ChooseLength({ selectValue, setSelectValue }: Props) {
  function newSelectValue(event) {
    setSelectValue(event.target.value);
  }

  return (
    <div>
      <h4>Hur många bokstäver?</h4>
      <select value={selectValue} onChange={newSelectValue}>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
}
