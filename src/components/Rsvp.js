// REACT
import React from 'react';

// COMPONENTS
import Guest from './Guest';

// ==========

class Rsvp extends React.Component {
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
          <span className="button">Accept</span>
          <span className="button">Decline</span>
          <span className="button">Add Guest</span>
        </div>       
        <ul>
          {group.guests.map((guest, i) => <Guest key={i} guest={guest} />)}
        </ul>       
      </div>
    );
  };
};

export default Rsvp;