import React from "react";

export default function Nav() {
  return (
    <div className="flex items-center justify-center flex-col mt-6">
      <ul className="flex gap-8 text-2xl">
        <a href="/game">
          <li>Game</li>
        </a>
        <a href="/information">
          <li>Information</li>
        </a>

        <a href="/highscore">
          <li>Highscore list</li>
        </a>
      </ul>
    </div>
  );
}
