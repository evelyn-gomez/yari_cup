import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Designs from "../components/Designs";
import Design from "../components/Design";
import NewDesign from "../components/NewDesign";

export const  linkStyle = {
  margin: 5
}

const searchBar = {
  float: 'right'
}

const topNav = {
  padding: 8
}

export default (
  <div> 
    <div>
      <div style={topNav} class="topnav">
        <h3>Yari Cup</h3>
        <a class="active" style={linkStyle} href="#home">Home</a>
        <a style={linkStyle} href="#about">About</a>
        <a href="#contact" style={linkStyle}>Contact</a>
        <i class="fa fa-search" style={searchBar}></i>
        <input style={searchBar} type="text" placeholder="Search.."></input>
      </div>
    </div>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/designs" exact component={Designs} />
        <Route path="/design/:design_id/:user_id/something/okaycool/:pageNumber" exact component={Design} />
        <Route path="/design" exact component={NewDesign} />
      </Switch>
    </Router>
  </div>
);

