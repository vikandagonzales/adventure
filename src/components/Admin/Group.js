// REACT
import React from 'react';

// COMPONENTS
import Guest from '../Rsvp/Guest';
import GuestAdd from '../Rsvp/GuestAdd';
import GroupEdit from './GroupEdit';
import GroupDelete from './GroupDelete';

// ==========

class Group extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      add: false,
      edit: false,
      modal: false,
      modalClasses: 'modal'
    };
  };

  add = () => {
    this.props.addGuestReset();
    this.setState({add: !this.state.add});
  };

  edit = () => {
    this.props.editGroupReset();
    this.setState({edit: !this.state.edit});
  };

  toggle = () => {
    this.props.deleteGroupReset();
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active'
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal'
      });
    }
  };

  render () {
    const group = this.props.group;
    return (
      <li>
        <div className="group-title-container">
          {
            !this.state.edit ? (
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
                    {
                      group.guests.length === 0 ? (
                        <span className="button is-small is-danger" onClick={this.toggle}>
                          <span className="icon">
                            <i className="fa fas fa-trash-alt"></i>
                          </span>
                        </span>
                      ) : null
                    }
                  </div>
                </div>
              </div>
            ) : (
                <GroupEdit
                  edit={this.edit}
                  editGroup={this.props.editGroup}
                  editGroupError={this.props.editGroupError}
                  group={group}
                />
              )
          }
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
                  admin={true}
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
                plus_one={false}
              />
            ) : null
          }
        </ul>
        <GroupDelete
          modalClasses={this.state.modalClasses}
          toggle={this.toggle}
          deleteGroup={this.props.deleteGroup}
          deleteGroupError={this.props.deleteGroupError}
          group={group}
        />
      </li>
    );
  };
};

export default Group;