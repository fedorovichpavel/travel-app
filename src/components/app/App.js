import React from 'react';

import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import "./App.scss"

import Home from './../home/home';
import Country from './../country/country';
import Footer from './../footer/footer';
import ModalLogin from './../modal-login/modal-login';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/travel-app" component={Home}/>
        <Route path="/country"component={Country}/>
        <Footer />
        <ModalLogin />
      </div>
    </BrowserRouter>
  );
}

export default App;
