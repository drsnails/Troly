import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainNavBar } from './cmps/MainCmps/MainNavBar';
import { About } from './pages/About';
import { HomePage } from './pages/HomePage';
import { TripStock } from './pages/TripStock';
import { LoginSignupPage } from './pages/LoginSignupPage';
import { TripApp } from './pages/TripApp.jsx'
import { UserTrips } from './pages/UserTrips';
import { Modal } from './cmps/MainCmps/Modal';

import '../src/scss/main.scss'
import { TripDetails } from './pages/TripDetails';
import { ErrorMsg } from './cmps/MainCmps/ErrorMsg';



export function App() {

  return (

    <div className="App">
        <MainNavBar />
         <main>
           <Modal/>
        <Switch>
          <Route component={LoginSignupPage} path='/lognsignup' />
          <Route component={TripApp} path='/trip/:id/:triproute' />
          <Route component={TripDetails} path='/trip/:id/' />
          <Route component={UserTrips} path='/user/:id' />
          <Route component={TripStock} path='/trip'/>
          <Route component={About} path='/about' />
          <Route exact component={HomePage} path='/' />
        </Switch>
      </main>
    </div>
  );
}

