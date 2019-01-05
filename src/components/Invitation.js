// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getGroups} from '../state/actions/groups';
import {getDetails} from '../state/actions/details';
import {getRegistries} from '../state/actions/registries';

// COMPONENTS
import Details from './Details';
import Rsvp from './Rsvp';
import Admin from './Admin';

// ==========

class Invitation extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal',
      action: ''
    };
  };

  toggle = action => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active',
        action
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal',
        action: ''
      });
    }
  };

  componentDidMount () {
    this.props.getGroups();
    this.props.getDetails();
    this.props.getRegistries();
  };

  render () {
    const user = this.props.user;
    const groups = this.props.groups;
    const userGroup = groups.find(group => group.id === user.group_id);
    const group = {
      id: groups.length !== 0 ? userGroup.id : null,
      name: groups.length !== 0 ? userGroup.name : null,
      limit: groups.length !== 0 ? userGroup.limit : null,
      allowance: groups.length !== 0 ? userGroup.limit - userGroup.guests.length : null,
      guests: groups.length !== 0 ? userGroup.guests : null,
    };   
    const details = {
      mother: this.props.details.mother,
      father: this.props.details.father,
      host: this.props.details.host,
      host_contact: this.props.details.host_contact,
      date: this.props.details.date,
      time: this.props.details.time,
      location: this.props.details.location,
      map: this.props.details.map,
      rsvp_date: this.props.details.rsvp_date
    };
    const registries = this.props.registries; 
    return (
      <div id="invitation">
        <div className="card invite">
          <div className="card-content">
            <figure className="image logo">
              <img src="./assets/adventure-logo.png" alt="The Adventure Begins" />
            </figure>
            <div className="messaging has-text-centered">
              <p className="intro">Join us for a <strong>baby shower</strong><br /> in honor of adventurers</p>
              <span className="title is-5">{details.father}<i className="fa fas fa-plus"></i>{details.mother}</span>
              <p>{details.date} at {details.time}</p>
              <p>{details.location}</p>
            </div>
          </div>           
        </div>
        <div>
          <div className="card envelope">
            <div className="card-content has-text-centered">
              <ul>
                {
                  (() => {
                    if (group.guests) return group.guests.map((guest, i) => <li key={i}>{guest.first_name} {guest.last_name}</li>);
                  })()
                }
                {
                  (() => {
                    if (group.guests) {
                      if (group.allowance > 0) return <li className="guest">+{group.allowance} guest{group.allowance > 1 ? 's' : null}</li>
                    }
                  })()
                }
              </ul>
            </div>           
          </div>
          <div className="buttons-container">
            <div className="buttons">
              <span className="button is-primary is-outlined" onClick={() => this.toggle('details')}>details</span>
              <span className="button is-primary is-outlined" onClick={() => this.toggle('rsvp')}>rsvp</span>
              {user.admin ? <span className="button is-primary is-outlined" onClick={() => this.toggle('admin')}>admin</span> : null}
            </div>
          </div>         
        </div>        
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          {
            (() => {
              switch (this.state.action) {
                case 'details':
                  return <Details details={details} registries={registries} />;
                case 'rsvp':
                  return <Rsvp group={group} />;
                case 'admin':
                  return <Admin groups={groups} details={details} registries={registries} />;
                default:
                  break;
              }
            })()
          }
          <span className="modal-close is-large" onClick={this.toggle}></span>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user,
  groups: state.groups.groups,
  details: state.details.details,
  registries: state.registries.registries
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getGroups,
  getDetails,
  getRegistries
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Invitation);