// REACT
import React from 'react';

// COMPONENTS
import Info from './Info';

// ==========

class Details extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tab: 'info'
    };
  };

  toggle = event => {
    switch (event.target.id) {
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
    return (
      <div className="modal-content" id="details-modal">
        <div className="box">
          <div className="tabs is-centered">
            <ul>
              <li className={this.state.tab === 'info' ? 'is-active' : null}><span id="info" onClick={this.toggle}>Info</span></li>
              <li className={this.state.tab === 'requests' ? 'is-active' : null}><span id="requests" onClick={this.toggle}>Requests</span></li>
              <li className={this.state.tab === 'registry' ? 'is-active' : null}><span id="registry" onClick={this.toggle}>Registry</span></li>
            </ul>
          </div>
          {
            (() => {
              switch (this.state.tab) {
                case 'info':
                  return <Info details={details} />;
                default:
                  break;
              }
            })()
          }
            {/* The parents-to-be would like to keep the baby's gender a secret and request that any gifts be gender-neutral.
            In place of cards, they also request a children's book with your message written inside!
          <a href={details.registry_link} target="_blank" rel="noopener noreferrer">{details.registry}</a> */}
        </div>
      </div>      
    );
  };
};

export default Details;