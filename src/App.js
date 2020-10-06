import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Component/NotFound/NotFound';
import LogIn from './Component/LogIn/LogIn';

function App() {
  return (
    <Router>
     <Switch>
      <Route exact path="/home">
      <Home></Home>
      </Route>

     <Route exact path ="/">
     <Home></Home>
     </Route>
     <Route path="/login">
     <LogIn/>
     </Route>

     <Route path="*">
     <NotFound/>
       </Route>
       
      </Switch>
     </Router>
 );
}

export default App;
