import React, { useEffect, useState } from "react";

export default function Board(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  let { backgroundColor } = props;

  useEffect(() => {
    function handleKeyPress(event) {
      //new array to make letters stay
      let arr = [...props.state];

      // when array contains 5 letters, then function will move to next row
      if (arr.length === props.boardStartLength) {
        return;
      }

      arr[activeIndex] = event.key.toUpperCase();

      //only allow letters and no enter key letters
      if (arr[activeIndex].match("[A-Öa-ö]") && event.keyCode !== 13) {
        props.setState(arr);
      } else {
        return false;
      }

      if (activeIndex < props.boardStartLength) {
        setActiveIndex(activeIndex + 1);
      }
      if (arr.length === props.boardStartLength) {
        arr = [];
      }
    }

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });
  return (
    <div
      id="background-color"
      className={`w-20 h-20 p-2 flex items-center justify-center rounded-lg shadow-box ${backgroundColor}`}
    >
      <p id="box-letter" className="text-white text-4xl font">
        {props.letterWord}
      </p>
    </div>
  );
}
