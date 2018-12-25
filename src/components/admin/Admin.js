// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getGroups} from '../../state/actions/groups';

// ==========

class Admin extends React.Component {
  componentDidMount () {
    this.props.getGroups();
  };

  render () {
    return (
      <div>
        <ul>
          {
            this.props.groups.map((group, i) => {
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
                                    return (<i class="fa fas fa-check-circle"></i>);
                                  case false:
                                    return (<i class="fa fas fa-times-circle"></i>);
                                  default:
                                    return (<i class="fa fas fa-question-circle"></i>);
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
  groups: state.main.groups
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getGroups
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Admin);