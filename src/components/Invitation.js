// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getGroup} from '../state/actions/groups';

// COMPONENTS
import Details from './Details';
import Rsvp from './Rsvp';

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
  };

  render () {
    const group = {
      id: this.props.group.id,
      name: this.props.group.name,
      limit: this.props.group.limit,
      guests: this.props.group.guests
    };
    return (
      <div>
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
                if (group.allowance > 0) return <li>+{group.allowance} guest{group.allowance > 1 ? 's' : null}</li>
              }
            })()
          }
        </ul>
        <span className="button" onClick={this.toggle} id="rsvp">rsvp</span>
        <span className="button" onClick={this.toggle} id="details">details</span>
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
  group: state.main.group
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getGroup
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Invitation);