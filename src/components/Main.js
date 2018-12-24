// REACT
import React from 'react';

// ROUTER
import {Link} from 'react-router-dom';

// REDUX
import {bindActionCreators} from 'redux';
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

  render () {
    return (
      <div>
        this is main
        <Link to="/invitation">
          link to invitation
        </Link>
        <span className="button" onClick={this.toggle}>login</span>
        <Login modalClasses={this.state.modalClasses} toggle={this.toggle} />
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);