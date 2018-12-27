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
          <h1 className="title is-1">Welcome Baby</h1>
          <p className="subtitle is-3">Keeghan & Vika are having a baby!</p>
          <span className="button" onClick={this.invite}>Invitation</span>
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