import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ApartmentsPage from "./pages/ApartmentsPage";

class UnauthenticatedApp extends React.Component {
  render() {
    const { apartments } = this.props;
    return (
      <React.Fragment>
        <h1>Greeting from Apartment App</h1>
        <Router>
          <Switch>
            <Route
              to="/apartments"
              render={props => <ApartmentsPage {...this.props} />}
            />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default UnauthenticatedApp;
