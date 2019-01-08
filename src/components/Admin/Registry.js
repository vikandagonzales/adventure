// REACT
import React from 'react';

// COMPONENTS
import RegistryDelete from './RegistryDelete';

// ==========

class Registry extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      edit: false,
      modal: false,
      modalClasses: 'modal',
      store: this.props.registry.store,
      logo: this.props.registry.logo,
      url: this.props.registry.url
    };
  };

  edit = () => {
    this.props.editRegistryReset();
    this.setState({edit: !this.state.edit});
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

  editRegistry = async event => {
    event.preventDefault();
    const {store, url, logo} = this.state;
    const registry = {store, url, logo};
    await this.props.editRegistry(registry, this.props.registry.id);
    if (!this.props.editRegistryError) this.edit();
  };

  render () {
    const registry = this.props.registry;
    const leftColumn = "column is-3";
    const rightColumn = "column is-9";
    return (
      <div>
        <form className="edit-registry" onSubmit={this.editRegistry}>
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
                  {
                    this.state.edit ? (
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Store"
                            value={this.state.store}
                            onChange={event => this.setState({store: event.target.value})}
                            required
                          />
                        </p>
                      </div>
                    ) : (
                      <span>{registry.store}</span>
                    )
                  }
                </li>
                <li>
                  <i className="fa fas fa-image"></i>
                  {
                    this.state.edit ? (
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="Logo"
                            value={this.state.logo}
                            onChange={event => this.setState({logo: event.target.value})}
                            required
                          />
                        </p>
                      </div>
                    ) : (
                      <a href={registry.logo} target="_blank" rel="noopener noreferrer">
                        {registry.logo.length > 28 ? registry.logo.substring(0, 28) + '...' : registry.logo}
                      </a>
                    )
                  }
                </li>
                <li>
                  <i className="fa fas fa-link"></i>
                  {
                    this.state.edit ? (
                      <div className="field">
                        <p className="control">
                          <input
                            className="input"
                            type="text"
                            placeholder="URL"
                            value={this.state.url}
                            onChange={event => this.setState({url: event.target.value})}
                            required
                          />
                        </p>
                      </div>
                    ) : (
                      <a href={registry.url} target="_blank" rel="noopener noreferrer">
                        {registry.url.length > 28 ? registry.url.substring(0, 28) + '...' : registry.url}
                      </a>
                    )
                  }                 
                </li>
              </ul>
            </div>
          </div>
          {
            !this.state.edit ? (
              <div className="buttons is-right">
                <span className="button is-small is-primary" onClick={this.edit}>
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
            ) : (
              <div className="buttons is-right">
                <span className="button is-small" onClick={this.edit}>
                  <span className="icon">
                    <i className="fa fas fa-times"></i>
                  </span>
                </span>
                <button className="button is-small is-success">
                  <span className="icon">
                    <i className="fa fas fa-check"></i>
                  </span>
                </button>
              </div>            
            )
          }
        </form>
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