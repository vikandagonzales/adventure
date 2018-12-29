// REACT
import React from 'react';

// ==========

class Requests extends React.Component {
  render () {
    const details = this.props.details;
    return (
      <div className="columns details-container requests">
        <div className="column is-4">
          <i className="fa fas fa-baby"></i>
          <p>We'd like to keep the baby's gender a secret until delivery and request that any gifts be <strong>gender-neutral</strong>.</p>
        </div>
        <div className="column is-4">
          <i className="fa fas fa-book"></i>
          <p>In place of cards, we'd love a <strong>book</strong>, used or new, with your message inside to remind the baby of you!</p>
        </div>
        <div className="column is-4">
          <i className="fa fas fa-envelope"></i>
          <p>Please <strong>RSVP</strong> through this website by {details.rsvp_date} to give us an accurate headcount for food and snacks.</p>
        </div>
      </div>
    );
  };
};

export default Requests;