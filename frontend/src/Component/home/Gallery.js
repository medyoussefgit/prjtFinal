import React, { useState } from "react";
import {Images} from "./Images";
import "./gallery.css";

 function Gallery() {
  const [selectedImg, setSelectedImg] = useState(Images[0]);

  return (
    <div className="App">
      <div className="container">
        <img src={selectedImg} alt="Selected" className="selected" />
        <div className="imgContainer">
          {Images.map((img, index) => (
            <img
              style={{ border: selectedImg === img ? "4px solid purple" : "" }}
              key={index}
              src={img}
              alt="dog"
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Gallery;