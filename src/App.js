import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/header";
import Nav from "./components/Nav/navbar";
import About from "./components/About/about";
import Skills from "./components/Experience/skills.jsx";
import Resume from "./components/Experience/resume";
// import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      {/* <Portfolio /> */}

      <Footer />
    </>
  );
};

export default App;
