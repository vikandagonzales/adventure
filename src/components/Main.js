// REACT
import React from 'react';

// REDUX
import {connect} from 'react-redux';

// COMPONENTS
import Login from './Login';

// ==========

class Main extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal'
    };
  };

  toggle = () => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active'
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal'
      });
    }
  };

  invite = () => {
    this.props.authorized ? this.props.history.push('/invitation') : this.toggle();
  };

  render () {
    return (
      <div id="main">
        <div className="container has-text-centered">
          <figure className="image logo">
            <img src="./assets/adventure-logo.png" alt="The Adventure Begins" />
          </figure>
          <p className="subtitle is-4">
            Join <strong>Keeghan</strong> & <strong>Vika</strong> in welcoming the newest member of their party
          </p>
          <span className="button is-primary is-outlined is-large" onClick={this.invite}>View Invitation</span>
        </div>       
        <Login modalClasses={this.state.modalClasses} toggle={this.toggle} history={this.props.history} />
      </div>
    );
  };
};

const mapStateToProps = state => ({
  authorized: state.auth.authorized
});

export default connect(mapStateToProps, null)(Main);