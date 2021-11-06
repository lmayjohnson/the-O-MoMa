import React from "react";
import "./Gallery.css";
import Image from "react-bootstrap/Image";
import img1 from "../TakashiMurakami.png";
import img2 from "../FridaKahlo.png";
import img3 from "../VincentVanGogh.jpeg";

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
    <div>
      <h3> TODO: Add grid and link JSON data to corresponding ID in grid.</h3>
      <div className="row">
        <div className="column">
          <Image src={img1} />
        </div>
      </div>
      <div className="column">
        <Image src={img3} />
      </div>
      <div className="column">
        <Image src={img2} />
      </div>
    </div>
  );
};
export default Gallery;
