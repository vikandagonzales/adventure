// REACT
import React from 'react';

// COMPONENTS
import RegistryDelete from './RegistryDelete';

// ==========

class Registry extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal'
    };
  };

  toggle = () => {
    this.props.deleteRegistryReset();
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
    const registry = this.props.registry;
    const leftColumn = "column is-3";
    const rightColumn = "column is-9";
    return (
      <div>
        <div className="columns">
          <div className={leftColumn}>
            <figure className="image">
              <img src={registry.logo} alt={registry.store} />
            </figure>
          </div>
          <div className={rightColumn}>
            <ul>
              <li>
                <i className="fa fas fa-store"></i>
                {registry.store}
              </li>
              <li>
                <i className="fa fas fa-image"></i>
                <a href={registry.logo} target="_blank" rel="noopener noreferrer">
                  {registry.logo.length > 30 ? registry.logo.substring(0, 30) + '...' : registry.logo}
                </a>
              </li>
              <li>
                <i className="fa fas fa-link"></i>
                <a href={registry.url} target="_blank" rel="noopener noreferrer">
                  {registry.url.length > 30 ? registry.url.substring(0, 30) + '...' : registry.url}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="buttons is-right">
          <span className="button is-small is-primary">
            <span className="icon">
              <i className="fa fas fa-pen"></i>
            </span>
          </span>
          <span className="button is-small is-danger" onClick={this.toggle}>
            <span className="icon">
              <i className="fa fas fa-trash-alt"></i>
            </span>
          </span>
        </div>
        <RegistryDelete
          modalClasses={this.state.modalClasses}
          toggle={this.toggle}
          deleteRegistry={this.props.deleteRegistry}
          deleteRegistryError={this.props.deleteRegistryError}
          registry={registry}
        />
      </div>
    );
  };
};

export default Registry;