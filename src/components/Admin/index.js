// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// COMPONENTS
import Guests from './Guests';
import Details from './Details';
import Registry from './Registry';

// ==========

class Admin extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tab: 'guests'
    };
  };

  toggle = action => {
    switch (action) {
      case 'guests':
        this.setState({tab: 'guests'});
        break;
      case 'details':
        this.setState({tab: 'details'});
        break;
      case 'registry':
        this.setState({tab: 'registry'});
        break;
      default:
        break;
    }
  };

  render () {
    const groups = this.props.groups;
    const details = this.props.details;
    const registries = this.props.registries;
    return (
      <div className="modal-content" id="admin-modal">
        <div className="box">
          <div className="tabs is-centered">
            <ul>
              <li className={this.state.tab === 'guests' ? 'is-active' : null}><span onClick={() => this.toggle('guests')}>Guests</span></li>
              <li className={this.state.tab === 'details' ? 'is-active' : null}><span onClick={() => this.toggle('details')}>Details</span></li>
              <li className={this.state.tab === 'registry' ? 'is-active' : null}><span onClick={() => this.toggle('registry')}>Registry</span></li>            
            </ul>
          </div>
          {
            (() => {
              switch (this.state.tab) {
                case 'guests':
                  return <Guests groups={groups} />;
                case 'details':
                  return <Details details={details} />;
                case 'registry':
                  return <Registry registries={registries} />;
                default:
                  break;
              }
            })()
          }
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Admin);