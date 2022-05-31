import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header/header";
import Nav from "./components/Nav/navbar";
import About from "./components/About/about";
import Skills from "./components/Experience/skills.jsx";
import Resume from "./components/Experience/resume";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import "./App.css";

const App = () => {
  return (
    <>
    <Router>
    <Nav />
    <Header /> 
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
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">About</Link>
//             </li>
//             <li>
//               <Link to="/skills">Skills</Link>
//             </li>
//             <li>
//               <Link to="/resume">Resume</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/skills">
//             <Skills />
//           </Route>
//           <Route path="/resume">
//             <Resume />
//           </Route>
//           <Route path="/">
//             <About />
//           </Route>
//           <Route path="/contact">
//             <Contact />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// // function About() {
// //   return <h2>About</h2>;
// // }

// // function Skills() {
// //   return <h2>Skills</h2>;
// // }

// // function Contact() {
// //   return <h2>Contact</h2>;
// // }

// // function Resume() {
// //   return <h2>Resume</h2>;
// // }
