import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Info from './pages/Form';
import Map from './pages/Map';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <>
    <Router>

      <Navbar /> 
      <Switch>
        <Route exact  path='/' component={Dashboard} />
        <Route exact  path='/userprofile' component={UserProfile} />
        <Route exact  path='/form' component={Info} />
        <Route exact path='/map' component={Map} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
