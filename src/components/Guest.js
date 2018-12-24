// REACT
import React from 'react';

// COMPONENTS
import GuestDelete from './GuestDelete';

// ==========

class Guest extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal'
    };
  };

  toggle = () => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active'
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal'
      });
    }
  };

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
          <span className="button">Cancel</span>
          <span className="button" onClick={this.toggle}>Delete</span>          
        </div>
        <GuestDelete modalClasses={this.state.modalClasses} toggle={this.toggle} guest={guest} />
      </li>
    );
  };
};

export default Guest;