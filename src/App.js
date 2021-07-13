import React from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';

import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Redirect,

} from "react-router-dom";
let user;

function App() {
  return (


    // this starter code from my repo (can-of-book)

    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          {user ? <Main /> : <Register />}
        </Route>
        {/* Redirect: this just for path in react-dom */}
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>

        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>

        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>

      </Switch>

      <Footer />


    </Router>
  );
}

export default App;
