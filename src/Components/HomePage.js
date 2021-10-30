import "./HomePage.css";
import ftimage from "../TakashiMurakami.png";
import react from "react";
import { kMaxLength } from "buffer";

const HomePage = () => {
  return (
    <div>
      <img className="Ft-image" src={ftimage} height="100px" alt="logo" />
    </div>
  );
};
export default HomePage;
