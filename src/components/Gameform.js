import React, { useRef } from "react";
import Searchforgame from "./Searchforgame";

function Gameform(gameid) {
  const inputRef = useRef(null);

  function handleClick() {
    Searchforgame(inputRef.current.value);
  }

  if (gameid != null) {
    return (
      <div className="gameform">
        <input type="text" placeholder="Enter game name" ref={inputRef} />
        <button type="button" onClick={handleClick}>
          Find game
        </button>
      </div>
    );
  }
}

export default Gameform;
