import React from "react";

const Gallery = () => {
  let req = new XMLHttpRequest();

  req.onreadystatechange = () => {
    if (req.readyState === XMLHttpRequest.DONE) {
      //console.log(req.responseText);
    }
  };

  req.open("GET", "https://api.jsonbin.io/b/6185fce6c4eaa14d5846b96b", true);
  req.setRequestHeader(
    "$2b$10$s7H4sIMBHHg90w2OHbw.WOabecMFwItIyyY9Oi3HxZV5ANKnwcGo6",
    "$2b$10$s7H4sIMBHHg90w2OHbw.WOabecMFwItIyyY9Oi3HxZV5ANKnwcGo6"
  );
  req.send();

  return (
    <h3>
      TO DO: create gallery grids and parse JSON corrrectly, then add unit test!
    </h3>
  );
};
export default Gallery;
