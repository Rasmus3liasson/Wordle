import React, { useEffect, useState } from "react";

export default function Board(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    function handleKeyPress(event) {
      //new array to make letters stay
      let arr = [...props.state];

      // when array contains 5 letters, then function won't work
      if (arr.length === 5) {
        return;
      }

      arr[activeIndex] = event.key.toUpperCase();

      props.setState(arr);

      if (activeIndex < 4) {
        setActiveIndex(activeIndex + 1);
      }
      if (arr.length === 5) {
        arr = [];
      }
    }

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });
  return (
    <div className="w-20 h-20 p-2 bg-dark flex items-center justify-center rounded-lg shadow-box">
      <p id="box-letter" className="text-white text-4xl font">
        {props.letterWord}
      </p>
    </div>
  );
}
