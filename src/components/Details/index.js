// REACT
import React from 'react';

// COMPONENTS
import Info from './Info';
import Requests from './Requests';
import Registry from './Registry';

// ==========

class Details extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tab: 'info'
    };
  };

  toggle = action => {
    switch (action) {
      case 'info':
        this.setState({tab: 'info'});
        break; 
      case 'requests':
        this.setState({tab: 'requests'});
        break;
      case 'registry':
        this.setState({tab: 'registry'});
        break;
      default:
        break;
    }
  };

  render () {
    const details = this.props.details;
    const registries = this.props.registries;
    return (
      <div className="modal-content" id="details-modal">
        <div className="box">
          <div className="tabs is-centered">
            <ul>
              <li className={this.state.tab === 'info' ? 'is-active' : null}><span onClick={() => this.toggle('info')}>Info</span></li>
              <li className={this.state.tab === 'requests' ? 'is-active' : null}><span onClick={() => this.toggle('requests')}>Requests</span></li>
              <li className={this.state.tab === 'registry' ? 'is-active' : null}><span onClick={() => this.toggle('registry')}>Registry</span></li>
            </ul>
          </div>
          {
            (() => {
              switch (this.state.tab) {
                case 'info':
                  return <Info details={details} />;
                case 'requests':
                  return <Requests details={details} />;
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

export default Details;