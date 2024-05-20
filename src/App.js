import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <NavBar />
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience/>
      </div>{" "}
      <Contact/>
      
    </Router>
  );
}

export default App;
