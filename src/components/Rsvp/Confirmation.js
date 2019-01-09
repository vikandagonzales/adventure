// REACT
import React from 'react';

// ==========

class Confirmation extends React.Component {
  render () {
    const group = this.props.group;
    const selected = this.props.selected;
    const guests = group.guests.filter(guest => selected.includes(guest.id));
    return (
      <div className={this.props.modalClasses}>
        <div className="modal-background" onClick={this.props.toggle}></div>
        <div className="modal-content delete-modal confirmation-modal">
          <div className="box has-text-centered">
            <p className="title is-4">Thank You</p>
            <p>
              You've responded for the following guests:
            </p>
            <ul>
              {
                guests.map((guest, i) => {
                  return (
                    <li key={i}>
                      <span className="menu-label">{guest.first_name} {guest.last_name}</span>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
        <span className="modal-close is-large" onClick={this.props.toggle}></span>
      </div>
    );
  };
};

export default Confirmation;