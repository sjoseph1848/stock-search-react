import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News';
import StockSearch from './components/pages/StockSearch';
import StockDetail from './components/pages/StockDetail';
import Footer from './components/section/Footer';


const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news' component={News} />
          <Route path='/search' component={StockSearch} />
          <Route path='/search/:id' component={StockDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
