// REACT
import React from 'react';

// ==========

class GroupAdd extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      limit: ''
    };
  };

  addGroup = async event => {
    event.preventDefault();
    const {name, limit} = this.state;
    const group = {name, limit};
    await this.props.addGroup(group);
    if (!this.props.addGroupError) this.props.add();
  };

  render () {
    return (
      <form className="add-group" onSubmit={this.addGroup}>
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
                  min="1"
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
              <span className="pointer" onClick={this.props.add}><i className="fa fas fa-times"></i></span>
            </div>
          </div>
        </div>
        {
          this.props.addGroupError ? (
            <p className="help is-danger has-text-centered">
              Could not add group.
              </p>
          ) : null
        }
      </form>
    );
  };
};

export default GroupAdd;