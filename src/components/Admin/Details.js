// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// ==========

class Details extends React.Component {
  render () {
    const details = this.props.details;
    const leftColumn = 'column is-3';
    const rightColumn = 'column is-9';
    return (
      <div>
        <div className="buttons is-centered">
          <span className="button is-primary">
            <span className="icon">
              <i className="fa fas fa-pen"></i>
            </span>
            <span>Edit Details</span>
          </span>
        </div>
        <div className="details">
          <div className="columns">
            <div className={leftColumn}><i className="fa fas fa-male"></i>Father</div>
            <div className={rightColumn}>{details.father}</div>
          </div>
          <div className="columns">
            <div className={leftColumn}><i className="fa fas fa-female"></i>Mother</div>
            <div className={rightColumn}>{details.mother}</div>
          </div>
          <div className="columns">
            <div className={leftColumn}><i className="fa fas fa-concierge-bell"></i>Host</div>
            <div className={rightColumn}>{details.host}</div>
          </div>
          <div className="columns">
            <div className={leftColumn}><i className="fa fas fa-phone"></i>Contact</div>
            <div className={rightColumn}>{details.host_contact}</div>
          </div>
          <div className="columns">
            <div className={leftColumn}><i className="fa fas fa-envelope"></i>Deadline</div>
            <div className={rightColumn}>{details.rsvp_date}</div>
          </div>
          <div className="columns">
            <div className={leftColumn}><i className="fa fas fa-calendar"></i>Date</div>
            <div className={rightColumn}>{details.date}</div>
          </div>
          <div className="columns">
            <div className={leftColumn}><i className="fa fas fa-clock"></i>Time</div>
            <div className={rightColumn}>{details.time}</div>
          </div>
          <div className="columns">
            <div className={leftColumn}><i className="fa fas fa-map-marker-alt"></i>Location</div>
            <div className={rightColumn}>{details.location}</div>
          </div>
          <div className="columns">
            <div className={leftColumn}><i className="fa fas fa-map"></i>Map</div>
            <div className={rightColumn}>{details.map}</div>
          </div>
          <div>
            <iframe title="location" src={details.map}></iframe>
          </div>
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