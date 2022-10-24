import React from "react";

function Searchforgame(gamename) {
  var url =
    "https://boardgamegeek.com/xmlapi2/search?query=" +
    gamename +
    "&type=boardgame";
  console.log(url);
  fetch(url).then((response) => response.text());

  /* .then((data) => {
    let parser = new DOMParser(),
      xmlDoc = parser.parseFromString(data, "text/xml");
    setImgUrl(xmlDoc.getElementsByTagName("image")[0].firstChild.nodeValue);
  }); 

  return <img src={imgUrl} alt="box art" className="game--image" />; */
}

export default Searchforgame;
