import React from "react";

interface Props {
  randomWord: string;
}

export default function FailedResult({ randomWord }: Props) {
  return (
    <div>
      <h4>Ordet vi var ute efter var {randomWord}</h4>
      <button>Kör igen</button>
    </div>
  );
}
