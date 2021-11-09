import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Gallery from "./Components/Gallery";
import logo from "./TheOMoMalogo.png";
import { useState, useEffect } from "react";

function App(props) {
  const [hidden, setHidden] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 40) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll',controlNavbar)
    }
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img className="App-logo" src={logo} height="100px" alt="logo" />
        <h2 className="Sub-header">The Online Museum of Modern Arts</h2>
        <main>
          <Router>
            {hidden ? null : <NavBar />}
            <Switch>
              <Route exact path="/" component={HomePage} />
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
