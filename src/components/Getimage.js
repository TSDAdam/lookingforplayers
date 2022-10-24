import React from "react";

function Getimage() {
  const [imgUrl, setImgUrl] = React.useState({});

  var url = "https://boardgamegeek.com/xmlapi2/thing?id=9209";
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      let parser = new DOMParser(),
        xmlDoc = parser.parseFromString(data, "text/xml");
      setImgUrl(xmlDoc.getElementsByTagName("image")[0].firstChild.nodeValue);
    });

  return <img src={imgUrl} alt="box art" className="game--image" />;
}

export default Getimage;
