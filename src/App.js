import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SlusalicePage from './pages/Slusalice/SlusalicePage';
import NarukvicePage from './pages/Narukvice/NarukvicePage.jsx';

const App = () => {
  return (
    <Router>
      <div>
        {/*Header is displayed on every page for user navigation*/}
        <Header/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/slusalice" component={SlusalicePage}/>
          <Route path="/narukvice" component={NarukvicePage}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
