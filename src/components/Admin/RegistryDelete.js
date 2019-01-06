// REACT
import React from 'react';

// ==========

class RegistryDelete extends React.Component {
  deleteRegistry = event => {
    event.preventDefault();
    this.props.deleteRegistry(this.props.registry.id);
    this.props.toggle();
  };

  render () {
    const registry = this.props.registry;
    return (
      <div className={this.props.modalClasses}>
        <div className="modal-background" onClick={this.props.toggle}></div>
        <div className="modal-content delete-modal">
          <div className="box">
            <form className="has-text-centered" onSubmit={this.deleteRegistry}>
              <p>Are you sure you want to delete {registry.store}?</p>
              <div className="buttons">
                <span className="button" onClick={this.props.toggle}>Cancel</span>
                <button className="button is-danger">Delete</button>
              </div>
              {
                this.props.deleteRegistryError ? (
                  <p className="help is-danger">
                    Could not delete registry.
                  </p>
                ) : null
              }
            </form>
          </div>
        </div>
        <span className="modal-close is-large" onClick={this.props.toggle}></span>
      </div>
    );
  };
};

export default RegistryDelete;