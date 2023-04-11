import React from "react";

interface Props {
  randomWord: string;
}

export default function FailedResult({ randomWord }: Props) {
  return (
    <div className="flex items-center flex-col">
      <p className="text-3xl">Ordet vi var ute efter var:</p>
      <span className="font-bold mt-2 text-2xl">{randomWord}</span>
      <a href="/game">
        <button className="button">Kör igen</button>
      </a>
    </div>
  );
}
