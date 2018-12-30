// REACT
import React from 'react';

// ==========

class GuestDelete extends React.Component {
  deleteGuest = event => {
    event.preventDefault();
    this.props.deleteGuest(this.props.guest.id, this.props.guest.group_id);
  };

  render () {
    const guest = this.props.guest;
    return (
      <div className={this.props.modalClasses}>
        <div className="modal-background" onClick={this.props.toggle}></div>
        <div className="modal-content delete-modal">
          <div className="box">           
            <form className="has-text-centered" onSubmit={this.deleteGuest}>
              <p>Are you sure you want to delete {guest.first_name} {guest.last_name}?</p>
              {
                this.props.deleteGuestError ? (
                  <p className="help is-danger">
                    Could not delete guest.
                  </p>
                ) : null
              }
              <div className="buttons">
                <span className="button" onClick={this.props.toggle}>Cancel</span>
                <button className="button is-danger">Delete</button>
              </div>
            </form>
          </div>
        </div>
        <span className="modal-close is-large" onClick={this.props.toggle}></span>
      </div>
    );
  };
};

export default GuestDelete;