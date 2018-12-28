// REACT
import React from 'react';

// ==========

class Details extends React.Component {
  render () {
    const details = {
      mother: this.props.details.mother,
      father: this.props.details.father,
      host: this.props.details.host,
      date: this.props.details.date,
      time: this.props.details.time,
      location: this.props.details.location,
      registry: this.props.details.registry,
      registry_link: this.props.details.registry_link
    };
    return (
      <div id="details">
        <div className="tabs is-centered">
          <ul>
            <li className="is-active"><span>Details</span></li>
            <li><span>Requests</span></li>
            <li><span>Registry</span></li>
          </ul>
        </div>
        <div>
          For questions, contact <strong>{details.host}</strong> at (123) 321-4332.
          The parents-to-be would like to keep the baby's gender a secret and request that any gifts be gender-neutral.
          In place of cards, they also request a children's book with your message written inside! 
          <a href={details.registry_link} target="_blank" rel="noopener noreferrer">{details.registry}</a>
          
        </div>
      </div>
    );
  };
};

export default Details;