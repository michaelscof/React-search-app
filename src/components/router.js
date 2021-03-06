import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import searchform from "./searchform";
import Home from "./home";
const Menu = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/search" component={searchform} />
    </div>
  </Router>
);



export default Menu;
