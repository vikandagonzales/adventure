// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// COMPONENTS
import Guest from '../Rsvp/Guest';

// ==========

class Group extends React.Component {
  render () {
    const group = this.props.group;
    return (
      <li>
        <div className="group-title">
          <p className="title is-4">{group.name}</p>
          <p className="menu-label">{group.guests.length}/{group.limit}</p>
        </div>
        <ul>
          {
            group.guests.map((guest, i) => {
              return (
                <Guest
                  key={i}
                  guest={guest}
                  select={this.props.select}
                  editGuest={this.props.editGuest}
                  editGuestReset={this.props.editGuestReset}
                  editGuestError={this.props.editGuestError}
                  deleteGuest={this.props.deleteGuest}
                  deleteGuestReset={this.props.deleteGuestReset}
                  deleteGuestError={this.props.deleteGuestError}
                  refresh={this.props.refresh}
                  getGroup={this.props.getGroup}
                  getGroups={this.props.getGroups}
                />
              );
            })
          }
        </ul>
      </li>
    );
  };
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Group);