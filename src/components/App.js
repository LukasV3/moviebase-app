import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./scss/App.scss";

import Navbar from "./Navbar.js";
import Search from "./movies/Search.js";
import Watchlist from "./movies/Watchlist.js";
import Watched from "./movies/Watched.js";
import history from "../history";

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Search} />
        <Route path="/watchlist" exact component={Watchlist} />
        <Route path="/watched" exact component={Watched} />
      </Switch>
    </Router>
  );
};

export default App;
