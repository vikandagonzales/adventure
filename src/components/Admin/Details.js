// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// ==========

class Details extends React.Component {
  render () {
    const details = this.props.details;
    const registries = this.props.registries;
    return (
      <div>
        <div className="columns details-container">
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
        <div className="columns details-container registry">
          {
            registries.map((registry, i) => {
              return (
                <div key={i} className="column is-4-tablet is-12-mobile">
                  <figure className="image">
                    <a href={registry.url} target="_blank" rel="noopener noreferrer">
                      <img src={registry.logo} alt={registry.store} />
                    </a>
                  </figure>
                </div>
              );
            })
          }
        </div>
      </div>   
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);