// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// COMPONENTS
import Guest from '../Rsvp/Guest';
import GuestAdd from '../Rsvp/GuestAdd';

// ==========

class Group extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      add: false
    };
  };

  add = () => {
    this.props.addGuestReset();
    this.setState({add: !this.state.add});
  };

  render () {
    const group = this.props.group;
    return (
      <li>
        <div className="level">
          <div className="level-left">
            <div className="group-title">
              <p className="title is-4">{group.name}</p>
              <p className="menu-label">{group.guests.length}/{group.limit}</p>
            </div>
          </div>
          <div className="level-right">
            <div className="buttons">
              {
                group.limit - group.guests.length > 0 ? (
                  <span className="button is-small is-success" onClick={this.add}>
                    <span className="icon">
                      <i className="fa fas fa-plus"></i>
                    </span>
                  </span>
                ) : null
              }
              <span className="button is-small is-primary" onClick={this.edit}>
                <span className="icon">
                  <i className="fa fas fa-pen"></i>
                </span>               
              </span>
              <span className="button is-small is-danger" onClick={this.delete}>
                <span className="icon">
                  <i className="fa fas fa-trash-alt"></i>
                </span>
              </span>
            </div>
          </div>
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
                />
              );
            })
          }
          {
            this.state.add ? (
              <GuestAdd
                add={this.add}
                addGuest={this.props.addGuest}
                addGuestError={this.props.addGuestError}
                group={group}
              />
            ) : null
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