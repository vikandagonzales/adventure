// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
//import {login, loginReset} from '../state/actions/auth';

// ==========

class GuestAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: ''
    };
  };

  login = event => {
    event.preventDefault();
    const {first_name, last_name} = this.state;
    const credentials = {first_name, last_name};
    // this.props.login(credentials, this.props.history);
  };

  render () {
    return (
      <li>
        <form onSubmit={this.login}>
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
//  loginError: state.auth.loginError
});

const mapDispatchToProps = dispatch => bindActionCreators({
//  login,
//  loginReset
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(GuestAdd);