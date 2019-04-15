import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Apartment from "./pages/Apartment";
class AuthenticatedApp extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/apartment" component={Apartment} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default AuthenticatedApp;
