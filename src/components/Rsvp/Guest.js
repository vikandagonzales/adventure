// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {deleteGuest, deleteGuestReset} from '../../state/actions/guests';
import {getUser} from '../../state/actions/auth';

// COMPONENTS
import GuestEdit from './GuestEdit';
import GuestDelete from './GuestDelete';

// ==========

class Guest extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      checked: false,
      edit: false,
      modal: false,
      modalClasses: 'modal'
    };
  };

  check = async () => {
    await this.setState({checked: !this.state.checked});
    this.props.select(this.props.guest.id);
  };

  edit = () => {
    this.setState({edit: !this.state.edit});
  };

  toggle = () => {
    this.props.deleteGuestReset();
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

  componentDidUpdate (prevProps) {
    if (prevProps.refresh !== this.props.refresh) this.setState({checked: false});
  };

  render () {
    const guest = this.props.guest;
    return (
      <li>        
        {
          !this.state.edit ? (
            <div>
              <input id={`guest-${guest.id}`} className="is-checkradio" type="checkbox" checked={this.state.checked} onChange={event => event.preventDefault()} />
              <label htmlFor={`guest-${guest.id}`} onClick={this.check}>
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
              </label>              
              <span className="button" onClick={this.edit}>Edit</span>
            </div>
          ) : (
            <GuestEdit
              toggle={this.toggle}
              edit={this.edit}
              editGuest={this.props.editGuest}
              editGuestError={this.props.editGuestError}
              guest={guest}
              user={this.props.user}
              getUser={this.props.getUser}
            />
          )
        }
        <GuestDelete
          modalClasses={this.state.modalClasses}
          toggle={this.toggle}
          deleteGuest={this.props.deleteGuest}
          deleteGuestError={this.props.deleteGuestError}
          guest={guest}
        />
      </li>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user,
  deleteGuestError: state.main.deleteGuestError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser,
  deleteGuest,
  deleteGuestReset
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Guest);