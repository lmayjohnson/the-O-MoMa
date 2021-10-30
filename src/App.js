import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
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
        <h2 className="Sub-header">The Online Museum of Modern Arts</h2>
        <main>
          <Router>
            <NavBar />
            <Switch>
              <Route path="/HomePage" component={HomePage} />
              <Route path="/Gallery" component={Gallery} />
              <Route path="/Contact" component={Contact} />
              <Route path="/About" component={About} />
            </Switch>
          </Router>
        </main>
      </header>
    </div>
  );
}

export default App;
