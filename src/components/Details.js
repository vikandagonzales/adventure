// REACT
import React from 'react';

// ==========

class Details extends React.Component {
  render () {
    const details = {
      mother: this.props.details.mother,
      father: this.props.details.father,
      host: this.props.details.host,
      host_contact: this.props.details.host_contact,
      date: this.props.details.date,
      time: this.props.details.time,
      location: this.props.details.location,
      map: this.props.details.map,
      registry: this.props.details.registry,
      registry_link: this.props.details.registry_link,
      rsvp_date: this.props.details.rsvp_date
    };
    return (
      <div className="modal-content" id="details-modal">
        <div className="box">
          <div className="tabs is-centered">
            <ul>
              <li className="is-active"><span>Details</span></li>
              <li><span>Requests</span></li>
              <li><span>Registry</span></li>
            </ul>
          </div>
          <div className="columns">
            <div className="column is-7">
              <iframe title="location" src={details.map}></iframe>
            </div>
            <div className="column is-5 info">
              <ul>
                <li><i className="fa fas fa-user-friends"></i>{details.father} & {details.mother}</li>
                <li><i className="fa fas fa-concierge-bell"></i>Hosted by {details.host}</li>
                <li><i className="fa fas fa-calendar"></i>{details.date}</li>
                <li><i className="fa fas fa-clock"></i>{details.time}</li>
                <li><i className="fa fas fa-map-marker-alt"></i>{details.location}</li>
                <li><i className="fa fas fa-envelope"></i>RSVP by {details.rsvp_date}</li>
              </ul>
              <p className="footnote has-text-centered">For questions, contact <strong>{details.host}</strong> at {details.host_contact}.</p>
            </div>
          </div>
          {/* The parents-to-be would like to keep the baby's gender a secret and request that any gifts be gender-neutral.
            In place of cards, they also request a children's book with your message written inside!
          <a href={details.registry_link} target="_blank" rel="noopener noreferrer">{details.registry}</a> */}
        </div>
      </div>      
    );
  };
};

export default Details;