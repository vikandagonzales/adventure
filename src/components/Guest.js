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
        <div className="buttons">
          <span className="button">Edit</span>
          <span className="button">Save</span>
          <span className="button">Delete</span>          
        </div>
      </li>
    );
  };
};

export default Guest;