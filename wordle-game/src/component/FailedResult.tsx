import React from "react";

interface Props {
  randomWord: string;
}

export default function FailedResult(props: Props) {
  return (
    <div>
      <h4>Ordet vi var ute efter var {props.randomWord}</h4>
      <button>Kör igen</button>
    </div>
  );
}
