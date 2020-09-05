import React from 'react';
import './App.css';
import Stock from './components/Stock';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Nav />
      </div>
    </Router>
  )
}

export default App;
