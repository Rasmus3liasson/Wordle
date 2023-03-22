import React, { useState } from "react";

export default function Board() {
  const [letter] = useState("H");
  return (
    <div className="w-20 h-20 p-2 bg-dark flex items-center justify-center rounded-lg shadow-box">
      <p className="text-white text-4xl font">{letter}</p>
    </div>
  );
}
