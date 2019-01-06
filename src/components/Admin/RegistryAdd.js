// REACT
import React from 'react';

// ==========

class RegistryAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      store: '',
      logo: '',
      url: ''
    };
  };

  addRegistry = async event => {
    event.preventDefault();
    const {store, url, logo} = this.state;
    const registry = {store, url, logo};
    await this.props.addRegistry(registry);
    if (!this.props.addRegistryError) this.props.add();
  };

  render () {
    return (
      <form onSubmit={this.addRegistry}>
        <div className="add-registry">
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
          {
            this.props.addRegistryError ? (
              <p className="help is-danger has-text-centered">
                Could not add registry.
              </p>
            ) : null
          }
        </div>
        <div className="buttons is-right">
          <span className="button is-small" onClick={this.props.add}>
            <span className="icon">
              <i className="fa fas fa-times"></i>
            </span>
          </span>
          <button className="button is-success is-small">
            <span className="icon">
              <i className="fa fas fa-check"></i>
            </span>
          </button>
        </div>
      </form>
    );
  };
};

export default RegistryAdd;