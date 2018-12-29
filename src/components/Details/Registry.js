// REACT
import React from 'react';

// ==========

class Registry extends React.Component {
  render () {
    const details = this.props.details;
    return (
      <div className="columns details-container">
        <div className="column">
          {/* <a href={details.registry_link} target="_blank" rel="noopener noreferrer">{details.registry}</a> */}
        </div>
      </div>
    );
  };
};

export default Registry;