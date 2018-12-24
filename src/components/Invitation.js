// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// COMPONENTS
import Details from './Details';
import Rsvp from './Rsvp';

// ==========

class Invitation extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal',
      action: ''
    };
  };

  toggle = event => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active',
        action: event.target.id
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal',
        action: ''
      });
    }
  };

  render () {
    return (
      <div>
        this is invitation
        <span className="button" onClick={this.toggle} id="rsvp">rsvp</span>
        <span className="button" onClick={this.toggle} id="details">details</span>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content">
            <div className="box">
              {
                (() => {
                  switch (this.state.action) {
                    case 'details':
                      return <Details />;
                    case 'rsvp':
                      return <Rsvp />;
                    default:
                      break;
                  }
                })()
              }              
            </div>
          </div>
          <span className="modal-close is-large" onClick={this.toggle}></span>
        </div>
        
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Invitation);