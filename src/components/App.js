// src/components/App.js

import TrackList from "./TrackList";
import TrackDetails from "./TrackDetails";
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      <h2>Apple Rock Music tracks</h2>
     
    </div>
    <div className="col-md-4 offset-md-1">
      
<TrackList />
      <Router>
    <Switch>
      <Route exact path="/" component={TrackList} />
      <Route path="/details" component={TrackDetails} />
      
    </Switch>
  </Router>
      
    </div>
  </div>
);



export default App;
