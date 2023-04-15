import React from "react";

export default function Nav() {
  return (
    <div className="flex items-center justify-center flex-col mt-6">
      <ul className="flex gap-5 text-xl md:text-2xl md:gap-9 ">
        <a href="/game">
          <li className="links current-page">Game</li>
        </a>
        <a href="/information">
          <li className="links">Information</li>
        </a>

        <a href="/highscore">
          <li className="links">Highscore</li>
        </a>
      </ul>
    </div>
  );
}
