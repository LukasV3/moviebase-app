import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import "./styles/App.scss";

import history from "../history";
import Navbar from "./Navbar.js";
import Search from "./movies/Search.js";
import Watchlist from "./movies/Watchlist.js";
import Watched from "./movies/Watched.js";
import MovieDetail from "./movies/MovieDetail";

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/watchlist" exact component={Watchlist} />
          <Route path="/watched" exact component={Watched} />
          <Route path="/watchlist/:id" exact>
            <Watchlist />
            <MovieDetail />
          </Route>
          <Route path="/watched/:id" exact>
            <Watched />
            <MovieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
