function GetBGGdata() {
  const url = "https://boardgamegeek.com/xmlapi2/thing?id=9209";
  fetch(url)
    .then((response) => response.text())
    .then(function (data) {
      let parser = new DOMParser(),
        xmlDoc = parser.parseFromString(data, "text/xml");

      console.log(xmlDoc);
      return <h1>xmlDoc</h1>;
    });
}

export default GetBGGdata;
