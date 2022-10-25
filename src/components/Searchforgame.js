import React from "react";

function Searchforgame(gamename) {
  var url =
    "https://boardgamegeek.com/xmlapi2/search?query=" +
    gamename +
    "&type=boardgame";

  const [gamenames, setGamenames] = React.useState([]);
  console.log(url);
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      let parser = new DOMParser(),
        xmlDoc = parser.parseFromString(data, "text/xml");
      setGamenames(xmlDoc.getElementsByTagName("name"));
    });
  return <h1>{gamenames}</h1>;
}

export default Searchforgame;
