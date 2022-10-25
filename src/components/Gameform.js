import React, { useRef } from "react";

function Gameform(gameid) {
  const inputRef = useRef(null);
  const [gamenames, setGamenames] = React.useState([]);

  function Searchforgame(gamename) {
    var url =
      "https://boardgamegeek.com/xmlapi2/search?query=" +
      gamename +
      "&type=boardgame";

    console.log(url);
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        let parser = new DOMParser(),
          xmlDoc = parser.parseFromString(data, "text/xml");
        setGamenames(xmlDoc.getElementsByTagName("name"));
      });
  }

  function handleClick() {
    console.log(inputRef.current.value);
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

/*      {gamenames.map((gamename) => (
          <div>{gamename.name}</div>
        ))}  */
