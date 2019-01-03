// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

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
                <li key={i}>
                  <div className="group-title">
                    <p className="title is-4">{group.name}</p>
                    <p className="menu-label">{group.guests.length}/{group.limit}</p>
                  </div>
                  <ul>
                    {
                      group.guests.map((guest, i) => {
                        return (
                          <li key={i}>
                            {
                              (() => {
                                switch (guest.accepted) {
                                  case true:
                                    return (<i className="fa fas fa-check-circle"></i>);
                                  case false:
                                    return (<i className="fa fas fa-times-circle"></i>);
                                  default:
                                    return (<i className="fa fas fa-question-circle"></i>);
                                }
                              })()
                            }
                            {guest.first_name} {guest.last_name}
                          </li>
                        );
                      })
                    }
                  </ul>
                </li>
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