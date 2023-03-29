import React from "react";

export default function ChooseLength(props) {
  function newSelectValue(event) {
    props.setSelectValue(event.target.value);
  }

  return (
    <select value={props.selectValue} onChange={newSelectValue}>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
    </select>
  );
}
