import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { TripApp } from './pages/TripApp'

export function App() {
  return (
    <div className="App">
      <Switch>
        <Route component={ CarApp } path='/' />
      </Switch>
    </div>
  );
}

