import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from "./Body"
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a simple Joke app built with React.
        </p>
        <a
          className="App-link"
          href="https://codepen.io/slarin"
          target="_blank"
          rel="noopener noreferrer"
        >
          View my CodePen
        </a>
      </header>
	  
	  <Body />
	  <Footer />
    </div>
  );
}

export default App;
