// REACT
import React from 'react';

// ==========

class GuestEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      first_name: this.props.guest.first_name,
      last_name: this.props.guest.last_name
    };
  };

  editGuest = async event => {
    event.preventDefault();
    const {first_name, last_name} = this.state;
    const guest = {first_name, last_name};
    await this.props.editGuest(guest, this.props.guest.id);
    if (!this.props.editGuestError) {
      if (this.props.guest.id === this.props.user.id) await this.props.getUser();
      this.props.edit();
    }
  };

  render () {
    const guest = this.props.guest;
    const user = this.props.user;
    const admin = this.props.admin;
    return (
      <form onSubmit={this.editGuest}>
        <div className="field is-horizontal">
          <div className="field-body">
            {
              admin ? (
                <div className="field actions">                  
                  {
                    user.id !== guest.id && !guest.plus_one ? (
                      <div className="buttons">
                        {
                          guest.admin ? (
                            <span className="pointer" onClick={this.props.toggle}>
                              <i className="fa fas fa-star"></i>
                            </span>
                          ) : (
                            <span className="pointer" onClick={this.props.toggle}>
                              <i className="fa far fa-star"></i>
                            </span>
                          )
                        }                       
                      </div>
                    ) : null
                  }                 
                </div>
              ) : null
            }
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
              {
                admin && user.id !== guest.id && !guest.plus_one ? (
                  <span className="pointer is-danger" onClick={this.props.toggle}>
                    <i className="fa fas fa-trash-alt"></i>
                  </span>
                ) : null
              }
              {
                guest.plus_one ? (
                  <span className="pointer" onClick={this.props.toggle}>
                    <i className="fa fas fa-trash-alt"></i>
                  </span>
                ) : null
              }
              <span className="pointer" onClick={this.props.edit}>
                <i className="fa fas fa-times"></i>
              </span>
              <button className="pointer">
                <i className="fa fas fa-check"></i>
              </button>             
            </div>
          </div>
        </div>
      </form>
    );
  };
};

export default GuestEdit;