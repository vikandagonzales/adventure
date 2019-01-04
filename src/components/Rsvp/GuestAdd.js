// REACT
import React from 'react';

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
    if (!this.props.addGuestError) {
      await this.props.getGroup(this.props.group.id);
      await this.props.getGroups();
      this.props.add();
    } 
  };

  render () {
    return (
      <li className="guest-li">
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
            <div className="field guest-actions">
              <div className="buttons">
                <button className="pointer"><i className="fa fas fa-check"></i></button>
                <span className="pointer" onClick={this.props.add}><i className="fa fas fa-times"></i></span>
              </div>
            </div>
          </div>
          {
            this.props.addGuestError ? (
              <p className="help is-danger has-text-centered">
                Could not add guest.
              </p>
            ) : null
          }
        </form>
      </li>
    );
  };
};

export default GuestAdd;