import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/helper/GetPosts';

import NavBar from "./utils/NavBar";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./utils/Profile";
import history from "./utils/history";
import LoginPage from './utils/Login'
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Posts />
      {/* <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
