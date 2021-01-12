import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SlusalicePage from './pages/SlusalicePage/SlusalicePage';
import NarukvicePage from './pages/NarukvicePage/NarukvicePage.jsx';
import PunjaciPage from './pages/PunjaciPage/PunjaciPage';
import DzojsticiPage from './pages/DzojsticiPage/DzojsticiPage';
import MaskicePage from './pages/MaskicePage/MaskicePage';
import CartPage from './pages/ShoppingCartPage/ShoppingCartPage';

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
          <Route path="/punjaci" component={PunjaciPage}/>
          <Route path="/dzojstici" component={DzojsticiPage}/>
          <Route path="/maskice" component={MaskicePage}/>
          <Route path="/korpa" component={CartPage}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
