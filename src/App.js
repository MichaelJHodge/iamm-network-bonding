import React from 'react';
import GlobalStyle from './Styles';
import Home from './pages/Home/Home';
import BondingCurve from './pages/Curve/BondingCurve';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { Navbar } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/curve' component={BondingCurve} />
      </Switch>
    </Router>
  );
}

export default App;