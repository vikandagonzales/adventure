// REACT
import React from 'react';

// ==========

class Guest extends React.Component {
  render () {
    const guest = this.props.guest;
    return (
      <li>
        (checkbox) {guest.first_name} {guest.last_name}
        {
          (() => {
            switch (guest.accepted) {
              case true:
                return 'accepted';
              case false:
                return 'declined';
              default:
                return 'has not rsvped';
            }
          })()
        }
      </li>
    );
  };
};

export default Guest;