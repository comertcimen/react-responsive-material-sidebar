import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Dashboard from "../views/Dashboard";
import Calendar from "../views/Calendar";
import Clients from "../views/Clients";
import Animals from "../views/Animals";
import Stocks from "../views/Stocks";
import Finance from "../views/Finance";
import Settings from "../views/Settings";
import Profile from "../views/Profile";

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Dashboard />
        </Route>

        <Route exact path='/calendar'>
          <Calendar />
        </Route>

        <Route exact path='/clients'>
          <Clients />
        </Route>

        <Route exact path='/animals'>
          <Animals />
        </Route>

        <Route exact path='/stocks'>
          <Stocks />
        </Route>

        <Route exact path='/finance'>
          <Finance />
        </Route>

        <Route exact path='/settings'>
          <Settings />
        </Route>

        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
