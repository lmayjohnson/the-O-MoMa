import "./HomePage.css";
import ftimage from "../TakashiMurakami.png";

const HomePage = () => {
  return (
    <div>
      <img className="Ft-image" src={ftimage} height="100px" alt="logo" fluid />
    </div>
  );
};
export default HomePage;
