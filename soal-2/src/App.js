import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home';
import { Router, Route, Switch } from 'react-router-dom';
import Detail from './pages/cake-detail';
import history from './history'

function App() {
  return (
    <React.Fragment>
      <Header />
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:id" component={Detail} />
          </Switch>
        </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
