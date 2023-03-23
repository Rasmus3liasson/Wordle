import React, { useEffect, useState } from "react";

export default function Board(props) {
  return (
    <div className="w-20 h-20 p-2 bg-dark flex items-center justify-center rounded-lg shadow-box">
      <p id="box-letter" className="text-white text-4xl font">
        {props.letterWord}
      </p>
    </div>
  );
}
