import React, { createContext, useState } from 'react';
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
import Register from './Component/Register/Register';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import RegisterDetails from './Component/RegisterDetails/RegisterDetails';
export const userContext = createContext();
function App() {
  const [logInUser,setLogInUser] = useState({});
  return (
    <userContext.Provider value={[logInUser, setLogInUser]}>
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
      <Route path="/details">
       <RegisterDetails/> 
      </Route>

     <PrivateRoute path="/register/:id">
      <Register/>
     </PrivateRoute>

     <Route path="*">
     <NotFound/>
       </Route>
       
      </Switch>
     </Router>
     </userContext.Provider>
 );
}

export default App;
