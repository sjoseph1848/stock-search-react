import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News';
import StockSearch from './components/pages/StockSearch';
import Footer from './components/section/Footer';
import Etf from './components/pages/Etf';
import ETFDetail from './components/pages/ETFDetail';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/news' component={News} />
          <Route path='/search' exact component={StockSearch} />
          <Route path='/etf' component={Etf} />
          <Route path='/search/etf/:id' component={ETFDetail} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
