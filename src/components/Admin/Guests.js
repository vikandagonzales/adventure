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
      <ul>
        {
          groups.map((group, i) => {
            return (
              <li key={i}>
                {group.name}
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
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Guests);