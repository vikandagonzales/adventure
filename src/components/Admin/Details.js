// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {editDetails, editDetailsReset} from '../../state/actions/details';

// ==========

class Details extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      edit: false,
      mother: this.props.details.mother,
      father: this.props.details.father,
      host: this.props.details.host,
      host_contact: this.props.details.host_contact,
      rsvp_date: this.props.details.rsvp_date,
      date: this.props.details.date,
      time: this.props.details.time,
      location: this.props.details.location,
      map: this.props.details.map
    };
  };

  edit = () => {
    this.props.editDetailsReset();
    this.setState({edit: !this.state.edit});
  };

  editDetails = async event => {
    event.preventDefault();
    const {mother, father, host, host_contact, rsvp_date, date, time, location, map} = this.state;
    const details = {mother, father, host, host_contact, rsvp_date, date, time, location, map};
    await this.props.editDetails(details);
    if (!this.props.editDetailsError) this.edit();
  };

  render () {
    const details = this.props.details;
    const leftColumn = 'column is-4';
    const rightColumn = 'column is-8';
    return (
      <div>  
        <form onSubmit={this.editDetails}>
          {
            !this.state.edit ? (
              <div className="buttons is-centered">
                <span className="button is-primary" onClick={this.edit}>
                  <span className="icon">
                    <i className="fa fas fa-pen"></i>
                  </span>
                  <span>Edit Details</span>
                </span>
              </div>
            ) : (
              <div className="buttons is-centered">
                <span className="button" onClick={this.edit}>Cancel</span>
                <button className="button is-success">Save</button>
              </div>
            )
          }
          {
            this.props.editGuestError ? (
              <p className="help is-danger has-text-centered">
                Could not edit details.
                </p>
            ) : null
          }
          <div className="details">
            <div className="columns">
              <div className={leftColumn}><i className="fa fas fa-female"></i>Mother</div>
              <div className={rightColumn}>
                {
                  this.state.edit ? (
                    <div className="field">
                      <p className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Mother"
                          value={this.state.mother}
                          onChange={event => this.setState({mother: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                  ) : details.mother
                }
              </div>              
            </div>
            <div className="columns">
              <div className={leftColumn}><i className="fa fas fa-male"></i>Father</div>
              <div className={rightColumn}>
                {
                  this.state.edit ? (
                    <div className="field">
                      <p className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Father"
                          value={this.state.father}
                          onChange={event => this.setState({father: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                  ) : details.father
                }
              </div>
            </div>
            <div className="columns">
              <div className={leftColumn}><i className="fa fas fa-concierge-bell"></i>Host</div>
              <div className={rightColumn}>
                {
                  this.state.edit ? (
                    <div className="field">
                      <p className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Host"
                          value={this.state.host}
                          onChange={event => this.setState({host: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                  ) : details.host
                }
              </div>
            </div>
            <div className="columns">
              <div className={leftColumn}><i className="fa fas fa-phone"></i>Contact</div>
              <div className={rightColumn}>
                {
                  this.state.edit ? (
                    <div className="field">
                      <p className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Contact"
                          value={this.state.host_contact}
                          onChange={event => this.setState({host_contact: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                  ) : details.host_contact
                }
              </div>
            </div>
            <div className="columns">
              <div className={leftColumn}><i className="fa fas fa-envelope"></i>Deadline</div>
              <div className={rightColumn}>
                {
                  this.state.edit ? (
                    <div className="field">
                      <p className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Deadline"
                          value={this.state.rsvp_date}
                          onChange={event => this.setState({rsvp_date: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                  ) : details.rsvp_date
                }
              </div>
            </div>
            <div className="columns">
              <div className={leftColumn}><i className="fa fas fa-calendar"></i>Date</div>
              <div className={rightColumn}>
                {
                  this.state.edit ? (
                    <div className="field">
                      <p className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Date"
                          value={this.state.date}
                          onChange={event => this.setState({date: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                  ) : details.date
                }
              </div>
            </div>
            <div className="columns">
              <div className={leftColumn}><i className="fa fas fa-clock"></i>Time</div>
              <div className={rightColumn}>
                {
                  this.state.edit ? (
                    <div className="field">
                      <p className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Time"
                          value={this.state.time}
                          onChange={event => this.setState({time: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                  ) : details.time
                }
              </div>
            </div>
            <div className="columns">
              <div className={leftColumn}><i className="fa fas fa-map-marker-alt"></i>Location</div>
              <div className={rightColumn}>
                {
                  this.state.edit ? (
                    <div className="field">
                      <p className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Location"
                          value={this.state.location}
                          onChange={event => this.setState({location: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                  ) : details.location
                }
              </div>
            </div>
            <div className="columns">
              <div className={leftColumn}><i className="fa fas fa-map"></i>Map</div>
              <div className={rightColumn}>
                {
                  this.state.edit ? (
                    <div className="field">
                      <p className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Map"
                          value={this.state.map}
                          onChange={event => this.setState({map: event.target.value})}
                          required
                        />
                      </p>
                    </div>
                  ) : (
                    details.map.length > 30 ? details.map.substring(0, 30) + '...' : details.map
                  )
                }
              </div>
            </div>
            <div>
              <iframe title="location" src={details.map}></iframe>
            </div>
          </div>
        </form>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  editDetailsError: state.details.editDetailsError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  editDetails,
  editDetailsReset
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Details);