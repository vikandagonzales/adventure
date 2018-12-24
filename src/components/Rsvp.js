// REACT
import React from 'react';

// COMPONENTS
import Guest from './Guest';
import GuestAdd from './GuestAdd';

// ==========

class Rsvp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      addGuest: false
    };
  };

  toggle = () => {
    this.setState({addGuest: !this.state.addGuest});
  };

  render () {
    const group = this.props.group;
    return (
      <div>
        <h1>{group.name}</h1>
        {
          (() => {
            if (group.allowance > 0) return <small>+{group.allowance} guest{group.allowance > 1 ? 's' : null}</small>
          })()
        }
        <div className="buttons">
          <span className="button" disabled>Accept</span>
          <span className="button" disabled>Decline</span>
          <span className="button" onClick={this.toggle}>Add Guest</span>
        </div>      
        <ul>
          {group.guests.map((guest, i) => <Guest key={i} guest={guest} />)}
          {this.state.addGuest ? <GuestAdd toggle={this.toggle} /> : null}         
        </ul>       
      </div>
    );
  };
};

export default Rsvp;