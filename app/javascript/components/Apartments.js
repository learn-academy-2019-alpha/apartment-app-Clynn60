import React from "react";
import PropTypes from "prop-types";

class Apartments extends React.Component {
  render() {
    const { apartments, current_user } = this.props;
    if (current_user) {
      var user_id = current_user.id;
    }
    return (
      <React.Fragment>
        <ul>
          {apartments.map((apartment) => {
            return (
              <li key={apartment.id}>
                {apartment.street_num} {apartment.street_name} {apartment.city}
                {apartment.postal_code} {apartment.state} {apartment.country}
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default Apartments;
