import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Books from "./components/Books";

import Jumbotron from "./components/Jumbotron";

import Nav from "./components/Nav";

function App() {

  return (

    <Router>

      <div>

        <Nav />

        <Jumbotron />

        <Switch>

          <Route exact path="/" component={Books} />

          <Route exact path="/books" component={Books} />

        </Switch>

      </div>

    </Router>

  );

};

export default App;