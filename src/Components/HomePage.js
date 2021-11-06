import "./HomePage.css";
import Image from "react-bootstrap/Image";
import ftimage from "../TakashiMurakami.png";

const HomePage = () => {
  return (
    <div>
      <Image className="Ft-image" src={ftimage} fluid />
    </div>
  );
};
export default HomePage;
