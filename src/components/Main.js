// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getDetails} from '../state/actions/details';

// SPRING
import {Spring} from 'react-spring';

// COMPONENTS
import Login from './Login';

// HELPERS
import {modalOpen, modalClose} from '../helpers/modal';

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
      modalOpen();
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal'
      });
      modalClose();
    }
  };

  invite = () => {
    this.props.authorized ? this.props.history.push('/invitation') : this.toggle();
  };

  componentDidMount () {
    this.props.getDetails();
  };

  render () {
    const details = {
      mother: this.props.details.mother,
      father: this.props.details.father
    };
    return (
      <Spring from={{opacity: 0, marginTop: -1000}} to={{opacity: 1, marginTop: 0}}>        
        {slide => (
          <div id="main" style={slide}>
            <div className="container has-text-centered">
              <figure className="image logo">
                <img src="./assets/adventure-logo.png" alt="The Adventure Begins" />
              </figure>
              <p className="subtitle is-4">
                Join <strong>{details.father}</strong> & <strong>{details.mother}</strong> in welcoming the newest member of their party
              </p>
              <span className="button is-primary is-outlined is-large" onClick={this.invite}>View Invitation</span>
            </div>
            <Login modalClasses={this.state.modalClasses} toggle={this.toggle} history={this.props.history} />
          </div>
        )}          
      </Spring>
    );
  };
};

const mapStateToProps = state => ({
  authorized: state.auth.authorized,
  details: state.details.details
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getDetails
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);