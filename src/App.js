import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  return (
    <Router>
      <NavBar />
      <Header />
      <div id="about">
        {" "}
        {/* Add this ID */}
        <About />
      </div>{" "}
    </Router>
  );
}

export default App;
