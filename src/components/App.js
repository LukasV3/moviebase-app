import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./scss/App.scss";

import Navbar from "./Navbar.js";
import Search from "./movies/Search.js";
import Watchlist from "./movies/Watchlist.js";
import Watched from "./movies/Watched.js";

const App = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/watchlist" exact component={Watchlist} />
          <Route path="/watched" exact component={Watched} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
