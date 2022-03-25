import React, { useEffect, useState } from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Registration from './pages/Registration';
import Main from "./pages/Main";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {

  useEffect(() =>
  {  

  },[]);
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/register' exact component={Registration} />
        <Route path='/login' exact component={Login} />
        <Route path='/admin' exact component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
