// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// COMPONENTS
import Group from './Group';

// ==========

class Guests extends React.Component {
  render () {
    const groups = this.props.groups;
    return (
      <div className="guests">
        <div className="buttons is-centered">
          <span className="button is-success">
            <span className="icon">
              <i className="fa fas fa-check"></i>
            </span>
            <span>Accept</span>
          </span>
          <span className="button is-danger">
            <span className="icon">
              <i className="fa fas fa-times"></i>
            </span>
            <span>Decline</span>
          </span>
          <span className="button is-info">
            <span className="icon">
              <i className="fa fas fa-redo"></i>
            </span>
            <span>Reset</span>
          </span>
          <span className="button is-primary">
            <span className="icon">
              <i className="fa fas fa-plus"></i>
            </span>
            <span>Add Group</span>
          </span>
        </div>
        <ul>
          {
            groups.map((group, i) => {
              return (
                <Group key={i} group={group} />
              );
            })
          }
        </ul>
      </div>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Guests);