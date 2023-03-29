import React from "react";

export default function FailedResult(props) {
  return (
    <div>
      <h4>Ordet vi var ute efter var {props.randomWord}</h4>
      <button>Kör igen</button>
    </div>
  );
}
