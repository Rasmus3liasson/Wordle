import React, { useState } from "react";

export default function Board() {
  const [letter] = useState("hej");
  return (
    <div className="w-20 h-20 p-2 bg-yellow flex items-center justify-center">
      {letter}
    </div>
  );
}
