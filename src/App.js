import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        {/* <Route exact path='/about' component={About} />
        <Route exact path='/details' component={Details} /> */}
      </Switch>
    </Router>
  );
}

export default App;
