// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getGroup} from '../state/actions/groups';
import {getDetails} from '../state/actions/details';

// COMPONENTS
import Details from './Details';
import Rsvp from './Rsvp';
import Admin from './admin/Admin';

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

  toggle = event => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active',
        action: event.target.id
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
    this.props.getGroup(this.props.user.group_id);
    this.props.getDetails();
  };

  render () {
    const group = {
      id: this.props.group.id,
      name: this.props.group.name,
      limit: this.props.group.limit,
      guests: this.props.group.guests
    };
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
                      group.allowance = group.limit - group.guests.length;
                      if (group.allowance > 0) return <li className="guest">+{group.allowance} guest{group.allowance > 1 ? 's' : null}</li>
                    }
                  })()
                }
              </ul>
            </div>           
          </div>
          <div className="buttons">
            <span className="button is-primary is-outlined" onClick={this.toggle} id="details">details</span>
            <span className="button is-primary is-outlined" onClick={this.toggle} id="rsvp">rsvp</span>
            {this.props.user.admin ? <span className="button is-primary is-outlined" onClick={this.toggle} id="admin">admin</span> : null}
          </div>
        </div>        
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content">
            <div className="box">
              {
                (() => {
                  switch (this.state.action) {
                    case 'details':
                      return <Details />;
                    case 'rsvp':
                      return <Rsvp allowance={group.allowance} />;
                    case 'admin':
                      return <Admin />;
                    default:
                      break;
                  }
                })()
              }
            </div>
          </div>
          <span className="modal-close is-large" onClick={this.toggle}></span>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user,
  group: state.main.group,
  details: state.details.details
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getGroup,
  getDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Invitation);