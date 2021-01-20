import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Designs from "../components/Designs";
import Design from "../components/Design";
import NewDesign from "../components/NewDesign";

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/designs" exact component={Designs} />
          <Route path="/design/:design_id" exact component={Design} />
          <Route path="/design" exact component={NewDesign} />
        </Switch>
      </Router>
    );
  }
}
