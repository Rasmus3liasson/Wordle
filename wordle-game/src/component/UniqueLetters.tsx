import React from "react";

export default function UniqueLetters(props) {
  function uniqueLetters(event) {
    props.setUniqueLetters(event.target.value);
  }

  return (
    <div>
      <h4>Only unique letters?</h4>
      <select value={props.uniqueLetters} onChange={uniqueLetters}>
        <option value="true">true</option>
        <option value="false">false</option>
      </select>
    </div>
  );
}
