var url = "https://boardgamegeek.com/xmlapi2/thing?id=9209";
var imgUrl = fetch(url)
  .then((response) => response.text())
  .then((data) => {
    let parser = new DOMParser(),
      xmlDoc = parser.parseFromString(data, "text/xml");
    imgUrl = xmlDoc.getElementsByTagName("image")[0].firstChild.nodeValue;
    return imgUrl;
  });

var Getimage = () => {
  var url = imgUrl.then(function (result) {
    return result;
  });

  console.log(url);
  return <img src={url} alt="image" />;
};

export default Getimage;
