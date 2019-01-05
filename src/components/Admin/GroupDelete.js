// REACT
import React from 'react';

// ==========

class GroupDelete extends React.Component {
  deleteGroup = event => {
    event.preventDefault();
    this.props.deleteGroup(this.props.group.id);
    this.props.toggle();
  };

  render () {
    const group = this.props.group;
    return (
      <div className={this.props.modalClasses}>
        <div className="modal-background" onClick={this.props.toggle}></div>
        <div className="modal-content delete-modal">
          <div className="box">
            <form className="has-text-centered" onSubmit={this.deleteGroup}>
              <p>Are you sure you want to delete {group.name}?</p>
              <div className="buttons">
                <span className="button" onClick={this.props.toggle}>Cancel</span>
                <button className="button is-danger">Delete</button>
              </div>
              {
                this.props.deleteGroupError ? (
                  <p className="help is-danger">
                    Could not delete group.
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

export default GroupDelete;