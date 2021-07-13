import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
import io from 'socket.io-client';
const SERVER_URL = process.env.SERVER_URL || 'localhost:5000/';
const socket = io(SERVER_URL, { transports: ['websocket'] });




function App() {

  // const [socket, setSocket] = React.useState(null);

  // const setupSocket = () => {
  //   // getting the token from LS
  //   const token = localStorage.getItem('token');
  //   if (token && !socket) {
  //     const newSocket = io('http://localhost:5000', { query: { token: localStorage.getItem('token') } });
  //     newSocket.on("connection", () => {
  //       console.log('hellooo');
  //     })
  //     setSocket(newSocket);
  //   }
  // }




  return (
    // this starter code from my repo (can-of-book)

    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/login">
          <Login />
        </Route>

        <Route exact path="/register">
          <Register />
        </Route>

      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
