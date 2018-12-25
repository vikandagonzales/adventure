// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addGuest, addGuestReset, editGuestReset} from '../state/actions/guests';

// COMPONENTS
import Guest from './Guest';
import GuestAdd from './GuestAdd';

// ==========

class Rsvp extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      add: false
    };
  };

  add = () => {
    this.props.addGuestReset();
    this.setState({add: !this.state.add});
  };

  componentDidMount = () => {
    this.props.editGuestReset();
  };

  render () {
    const group = this.props.group;
    group.allowance = this.props.allowance;
    return (
      <div>
        <h1>{group.name}</h1>
        {
          (() => {
            if (group.allowance > 0) return <small>+{group.allowance} guest{group.allowance > 1 ? 's' : null}</small>
          })()
        }
        <div className="buttons">
          <span className="button" disabled>Accept</span>
          <span className="button" disabled>Decline</span>
          {group.allowance > 0 ? <span className="button" onClick={this.add}>Add Guest</span> : null}    
        </div>      
        <ul>
          {group.guests.map((guest, i) => <Guest key={i} guest={guest} editGuestError={this.props.editGuestError} />)}
          {
            this.props.editGuestError ? (
              <p className="help is-danger">
                Could not edit guest.
              </p>
            ) : null
          }
          {
            this.state.add ? (
              <GuestAdd
                add={this.add}
                addGuest={this.props.addGuest}
                addGuestError={this.props.addGuestError}
                group={group}
              />
            ) : null
          }
        </ul>       
      </div>
    );
  };
};

const mapStateToProps = state => ({
  group: state.main.group,
  addGuestError: state.main.addGuestError,
  editGuestError: state.main.editGuestError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addGuest,
  addGuestReset,
  editGuestReset
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Rsvp);