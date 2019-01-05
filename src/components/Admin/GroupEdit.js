// REACT
import React from 'react';

// ==========

class GroupEdit extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: this.props.group.name,
      limit: this.props.group.limit
    };
  };

  editGroup = async event => {
    event.preventDefault();
    const {name, limit} = this.state;
    const group = {name, limit};
    await this.props.editGroup(group, this.props.group.id);
    if (!this.props.editGroupError) this.props.edit();
  };

  render () {
    const group = this.props.group;
    return (
      <form className="edit-group" onSubmit={this.editGroup}>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field is-expanded">
              <p className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={event => this.setState({name: event.target.value})}
                  required
                />
              </p>
            </div>
            <div className="field is-narrow">
              <p className="control">
                <input
                  className="input group-limit"
                  type="number"
                  min={group.guests.length > 0 ? group.guests.length : 1}
                  placeholder="Limit"
                  value={this.state.limit}
                  onChange={event => this.setState({limit: event.target.value})}
                  required
                />
              </p>
            </div>
          </div>
          <div className="field actions">
            <div className="buttons">
              <button className="pointer"><i className="fa fas fa-check"></i></button>
              <span className="pointer" onClick={this.props.edit}><i className="fa fas fa-times"></i></span>
            </div>
          </div>
        </div>
      </form>
    );
  };
};

export default GroupEdit;