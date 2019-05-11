import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import Search from "./pages/Search";

import Saved from "./pages/Saved";

import Jumbotron from "./components/Jumbotron";

import Nav from "./components/Nav";

function App() {

  return (

    <Router>

      <div>

        <Nav />

        <Jumbotron />

        <Switch>

          {/* <Route exact path="/" component={Search} /> */}

          <Route exact path="/saved" component={Saved} />

        </Switch>

      </div>

    </Router>

  );

};

export default App;