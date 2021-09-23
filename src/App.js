import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import logo from "./TheOMoMalogo.png";
import ftimage from "./TakashiMurakami.png";
import Homepage from "./Components/HomePage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} height="100px" alt="logo" />
        <h2 className="Sub-header">
          The Online Museum of Modern Arts
        </h2>
        <img className="Ft-image" src={ftimage} height="100px" alt="logo" />
        <Router>
          <NavBar />
          <Switch>
            <Route path="../" exact component={Homepage} />
            <Route path="/Gallery" exact component={Gallery} />
            <Route path="/Contact" component={Contact} />
            <Route path="/About" component={About} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
