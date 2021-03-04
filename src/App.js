import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard.js';
import User_profile from './pages/User_profile.js';
import Form from './pages/Form.js';
import Map from './pages/Map.js';

function App() {

    return (
      <Router>
        <div>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/user-profile" component={User_profile}/>
          <Route path="/form" component={Form}/>
          <Route path="/map" component={Map}/>
        </div>
      </Router>
    );

}

export default App;
