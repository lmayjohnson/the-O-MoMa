import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import logo from "./TheOMoMalogo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} height="100px" alt="logo" />
        <Router>
          <NavBar />
          <Switch>
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
