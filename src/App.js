import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Docker, TravisCI and AWS</h1>
        <h3>Elasticbeanstalk</h3>
        <p>Using Docker, TravisCI and AWS for hosting this project.</p>
      </header>
    </div>
  );
}

export default App;
