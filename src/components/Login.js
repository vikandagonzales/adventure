// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {login, loginReset} from '../state/actions/auth';

// ==========

class Login extends React.Component {
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
    this.props.login(credentials, this.props.history);
  };

  componentDidMount () {
    this.props.loginReset();
  };

  render () {
    return (
      <div id="login-modal" className={this.props.modalClasses}>
        <div className="modal-background" onClick={this.props.toggle}></div>
        <div className="modal-content">
          <div className="box">
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
              </div>
              {
                this.props.loginError ? (
                  <p className="help is-danger has-text-centered">
                    Guest not found.
                  </p>
                ) : null
              }
              <div className="buttons has-text-centered">
                <button className="button is-primary">Log In</button>
              </div>
            </form>
          </div>
        </div>
        <span className="modal-close is-large" onClick={this.props.toggle}></span>
      </div>
    );
  };
};

const mapStateToProps = state => ({
  loginError: state.auth.loginError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  login,
  loginReset
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);