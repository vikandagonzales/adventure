// REACT
import React from 'react';

// ==========

class Login extends React.Component {
  render () {
    return (
      <div className={this.props.modalClasses}>
        <div className="modal-background" onClick={this.props.toggle}></div>
        <div className="modal-content">
          <div className="box">
            login
          </div>
        </div>
        <span className="modal-close is-large" onClick={this.props.toggle}></span>
      </div>
    );
  };
};

export default Login;