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
      add: false
    };
  };

  add = () => {
    this.setState({add: !this.state.add});
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
          {group.allowance > 0 ? <span className="button" onClick={this.add}>Add Guest</span> : null}    
        </div>      
        <ul>
          {group.guests.map((guest, i) => <Guest key={i} guest={guest} />)}
          {this.state.add ? <GuestAdd add={this.add} /> : null}         
        </ul>       
      </div>
    );
  };
};

export default Rsvp;