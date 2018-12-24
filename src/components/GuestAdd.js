// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addGuestReset} from '../state/actions/guests';

// ==========

class GuestAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: ''
    };
  };

  addGuest = async event => {
    event.preventDefault();
    const {first_name, last_name} = this.state;
    const guest = {group_id: this.props.group.id, first_name, last_name, plus_one: true};
    await this.props.addGuest(guest, this.props.group.id);
    if (!this.props.addGuestError) this.props.add();
  };

  componentDidMount () {
    this.props.addGuestReset();
  };

  render () {
    return (
      <li>
        <form onSubmit={this.addGuest}>
          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="First Name"
                    value={this.state.first_name}
                    onChange={event => this.setState({first_name: event.target.value})}
                    required
                  />
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    placeholder="Last Name"
                    value={this.state.last_name}
                    onChange={event => this.setState({last_name: event.target.value})}
                    required
                  />
                </p>
              </div>
            </div>
            <div className="field">
              <div className="buttons">
                <button className="button">Save</button>
                <span className="button" onClick={this.props.add}>Delete</span>
              </div>
            </div>
          </div>
          {
            this.props.addGuestError ? (
              <p className="help is-danger">
                Could not add guest.
              </p>
            ) : null
          }
        </form>
      </li>
    );
  };
};

const mapStateToProps = state => ({
  addGuestError: state.main.addGuestError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addGuestReset
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GuestAdd);