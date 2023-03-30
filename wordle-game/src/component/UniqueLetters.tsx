import React from "react";

export default function UniqueLetters(props) {
  function uniqueLetters(event) {
    if (event.target.value === "true") {
      props.setUniqueLetters(true);
    } else {
      props.setUniqueLetters(event.target.value === "true");
    }
  }

  return (
    <div>
      <h4>Only unique</h4>
      <select value={props.uniqueLetters.toString()} onChange={uniqueLetters}>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div>
  );
}
