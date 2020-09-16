import React from 'react';

import { Switch, Route } from 'react-router-dom';
import { MainNavBar } from './cmps/MainCmps/MainNavBar';
import { About } from './pages/About';
import { HomePage } from './pages/HomePage';
import { LoginSignupPage } from './pages/LoginSignupPage';
import { TripApp } from './pages/TripApp.jsx'
import { UserTrips } from './pages/UserTrips';
import '../src/scss/main.scss'


export function App() {

  return (

    <div className="App">
      <header>
        <MainNavBar />
      </header>
      <main>
        <Switch>
          <Route component={LoginSignupPage} path='/lognsignup' />
          <Route component={TripApp} path='/trip/:id/' />
          <Route component={UserTrips} path='/user/:id' />
          <Route component={About} path='/about' />
          <Route component={HomePage} path='/' />
        </Switch>
      </main>
    </div>
  );
}

