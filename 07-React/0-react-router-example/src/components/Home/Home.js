import React, { Component } from 'react';
import './Home.css';
import purple from '../../assets/purple.png';
import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return (
      <Router>
        <div className="Home">
          <header className="Home-header">
            <span>Grape</span>
            <nav>
              <Link to="/"><button>Home</button></Link>
              <Link to="/about"><button>About</button></Link>
              <Link to="/projects"><button>Projects</button></Link>
              <Link to="/contact"><button>Contact</button></Link>
            </nav>
          </header>
          <Route exact path="/">
            <div>
              <h1>Ohhhhhh Yeaaahhh!</h1>
              <img alt="purple koolaid character" src={purple} />
            </div>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </div>
      </Router>
    );
  }
}

export default Home;
