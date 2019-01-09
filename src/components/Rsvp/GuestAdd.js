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
    const guest = {group_id: this.props.group.id, first_name, last_name, plus_one: this.props.plus_one};
    await this.props.addGuest(guest, this.props.group.id);
    if (!this.props.addGuestError) this.props.add();
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
            <div className="field actions">
              <div className="buttons">
                <button className="pointer"><i className="fa fas fa-check"></i></button>
                <span className="pointer" onClick={this.props.add}><i className="fa fas fa-times"></i></span>
              </div>
            </div>
          </div>
        </form>
      </li>
    );
  };
};

export default GuestAdd;